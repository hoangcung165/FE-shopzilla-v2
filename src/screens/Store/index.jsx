import { Box, Button, Chip, Grid, IconButton, InputAdornment, InputBase, TableCell, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CTable from '../../components/CTable'
import styles from './style'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { LIST_STORE_ACTION } from '../../redux/type'
import AddStoreModal from './Add/AddStoreModal'
import CLoading from '../../components/CLoading'
import { Colors } from '../../utils/common/color'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faCircleInfo, faInfo } from '@fortawesome/free-solid-svg-icons'
import AddIcon from '@mui/icons-material/Add';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

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
            color: classes.activeStatus
        }
    ]


    // === LOGIC ===
    const getListStore = (page) => {
        let params = {
            page: page,
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

    const onLoadMore = (currentPage) => {
        setPageIndex(currentPage);
        getListStore(currentPage);

    }

    useEffect(() => {
        getListStore(pageIndex);
    }, [])



    // === RENDER ===
    const renderHeaderTable = () => {
        return (
            <Grid container spacing={3} direction={'column'} className={classes.conHeaderTable}>
                <Grid item>
                    <Typography variant='h4' color={'primary'}>{'Store Manager'}</Typography>
                </Grid>
                <Grid item container direction={'row'}>
                    <Grid item container spacing={2} xs={6} alignItems={'center'}>
                        <Grid item>
                            <InputBase sx={{ ml: 1, flex: 1 }}
                                className={classes.btnSearch}
                                placeholder='Search'
                                inputProps={{ 'aria-label': 'search' }}
                                endAdornment={
                                    <InputAdornment position='end'>
                                        <IconButton type='button'>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                } />
                        </Grid>
                    </Grid>
                    <Grid item xs={6} display={'flex'} flexDirection={'row'} justifyContent={'flex-end'}>
                        <Button color='primary' className={classes.btnAction} onClick={() => setOpenAddModal(true)}>
                            <AddIcon />
                        </Button>
                        <Button className={classes.btnAction}>
                            <ExpandMoreIcon />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
    const renderAction = (cell) => {
        return (
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}>
                <Button variant="contained" className={`${classes.actionBtn} ${classes.detailBtn}`}
                    startIcon={
                        <FontAwesomeIcon icon={faCircleInfo} className={classes.iconButton} />
                    }>
                    Detail
                </Button>
                <Button variant='contained' className={`${classes.actionBtn} ${classes.disableBtn}`}
                    startIcon={
                        <FontAwesomeIcon icon={faBan} className={classes.iconButton} />
                    }>
                    Disable
                </Button>
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
                    <Chip label={status.nameVi} className={statusDisplay.color} />
                </Box>
            )
        }
    }
    const renderPageContent = () => {
        return (
            <Grid container spacing={3} className={classes.conContent}>
                <Grid item xs={12}>
                    <CTable
                        dataTable={dataTable}
                        totalPage={data?.totalItems}
                        page={pageIndex}
                        rowPerPages={data?.pageSize}
                        tableTitle='Store Manager'
                        header={renderHeaderTable}
                        onLoadMore={onLoadMore} />
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