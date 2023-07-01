import { Box, Button, Grid, TableCell, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CTable from '../../components/CTable'
import styles from './style'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { LIST_STORE_ACTION } from '../../redux/type'
import AddStoreModal from './Add/AddStoreModal'
import CLoading from '../../components/CLoading'
import { Colors } from '../../utils/common/color'

const Store = () => {
    // === INSTANCE ==
    const classes = styles()
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)
    const [pageIndex, setPageIndex] = useState(1)
    const [dataTable, setDataTable] = useState(
        {
            headers: [
                { name: 'Name', id: 'name', align: 'center', isCustome: false },
                // { name: 'Email', id: 'email', align: 'center', isCustome: false },
                { name: 'Phone', id: 'phone', align: 'center', isCustome: false },
                { name: 'Address', id: 'address', align: 'center', isCustome: false },
                { name: 'Status', id: 'status', align: 'center', isCustome: true, cell: (tableCell) => renderStatus(tableCell) },
                { name: 'Action', id: 'action', align: 'center', isCustome: true, cell: (tableCell) => renderAction(tableCell) }
            ],
            rows: []
        }
    )
    const [data, setData] = useState(null)
    const [openAddModal, setOpenAddModal] = useState(false)

    const defaultStatusColor = [
        {
            key: 'ACTIVE',
            color: `${Colors.__bs_success}`
        }
    ]


    // === LOGIC ===
    const getListStore = () => {
        let params = {
            page: pageIndex,
            maxItems: 25
        }
        dispatch({
            type: LIST_STORE_ACTION,
            payload: {
                params,
                callback: (success, res) => {
                    if (success) {
                        let newDataTable = [], item = null;
                        if (res) {
                            for (item of res.data) {
                                newDataTable.push(item)
                            }
                        }
                        setData(res);
                        setDataTable({ ...dataTable, rows: [...newDataTable] })

                    }
                    setLoading(false)

                }

            }
        })
    }

    useEffect(() => {
        if (data == null && loading) {
            getListStore();
        }
    }, [data])

    // === RENDER ===
    const renderAction = (cell) => {
        return (
            <Box>

            </Box>
        )
    }
    const renderStatus = (dataCell) => {

        if (dataCell.cell?.status) {
            let status = dataCell.cell.status

            // find status default by key
            let statusDisplay = defaultStatusColor.find(item => item.key == status.key);

            //TODO handle status
            return (
                <Box>
                    <Typography>{status.nameVi}</Typography>
                </Box>
            )
        }
    }
    const renderPageContent = () => {
        return (
            <Grid container spacing={3} className={classes.conContent}>
                <Grid item xs={10}>
                    <CTable
                        dataTable={dataTable}
                        totalPage={data?.totalItems}
                        page={pageIndex}
                        rowPerPages={data?.pageSize}
                        tableTitle='Store Manager'
                        action={{
                            addNew: () => {
                                setOpenAddModal(true)
                            }
                        }} />
                </Grid>
                <Grid item>
                    <Box>
                        <Typography>Fiter</Typography>
                    </Box>
                </Grid>
            </Grid>
        )
    }
    return (
        <Box className={classes.conBox}>
            {loading ? <CLoading /> : renderPageContent()}
            <AddStoreModal title='Add New Store' open={openAddModal} onClose={() => setOpenAddModal(false)} />
        </Box>

    )
}

export default Store