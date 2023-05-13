import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CTable from '../../components/CTable'
import styles from './style'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { LIST_STORE_ACTION } from '../../redux/type'
import AddStoreModal from './Add/AddStoreModal'

const Store = () => {
    // === INSTANCE ==
    const classes = styles()
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)
    const [pageIndex, setPageIndex] = useState(1)
    const [dataTable, setDataTable] = useState(null)
    const [openAddModal, setOpenAddModal] = useState(false)


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
                    console.log(res)
                }
            }
        })
    }



    useEffect(() => {
        getListStore()
    }, [])

    console.log(openAddModal)

    // === RENDER ===
    return (
        <Box className={classes.conBox}>
            <Grid container spacing={3} className={classes.conContent}>
                <Grid item xs={10}>
                    <CTable
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
            <AddStoreModal title='Add New Store' open={openAddModal} onClose={() => setOpenAddModal(false)} />
        </Box>
    )
}

export default Store