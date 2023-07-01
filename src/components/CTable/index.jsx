import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Typography } from '@mui/material'
import React from 'react'
import { Configs } from '../../config'
import { useTranslation } from 'react-i18next'
import styles from './style'
import AddIcon from '@mui/icons-material/Add';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

const CTable = ({
    dataTable = [],
    rowPerPages = Configs.rowPerPage,
    totalPage = Configs.pageSize,
    page = 1,
    onLoadMore = () => { },
    tableTitle = 'Table Title',
    action = {},
    ...props
}) => {




    const { t } = useTranslation()
    const classes = styles()



    // === RENDER ===
    return (
        <Paper>
            <Box>
                <Grid container spacing={3} direction={'column'} className={classes.conHeaderTable}>
                    <Grid item>
                        <Typography variant='h4'>{tableTitle}</Typography>
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
                            {action.addNew ? (
                                <Button className={classes.btnAction} onClick={action.addNew}>
                                    <AddIcon />
                                </Button>) : <></>}
                            <Button className={classes.btnAction}>
                                <ExpandMoreIcon />
                            </Button>

                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {dataTable.headers.map((header) => {
                                return (
                                    <TableCell key={header.id} align={header.align}>
                                        {header.name}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataTable.rows.map((row, rowIndex) => {
                            return (
                                <TableRow
                                    key={`row_${rowIndex}`}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    hover
                                >
                                    {dataTable.headers.map((header, headerIndex) => {
                                        return (
                                            <Box
                                                key={`cell_${headerIndex}`}
                                                component={'td'}
                                                align={header.align}
                                                className={classes.conCell}
                                            >
                                                {header.isCustome == true ?
                                                    <Box>
                                                        {header.cell({ ...props, cell: row, index: headerIndex })}
                                                    </Box>
                                                    :
                                                    <Typography>{row[header.id]}</Typography>}
                                            </Box>
                                        )
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[rowPerPages]}
                component="div"
                count={totalPage}
                rowsPerPage={rowPerPages}
                page={page - 1}
                onPageChange={onLoadMore}
            />
        </Paper>
    )
}

export default CTable