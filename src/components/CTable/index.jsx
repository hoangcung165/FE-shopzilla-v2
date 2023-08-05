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
    header = () => { },
    ...props
}) => {

    const { t } = useTranslation()
    const classes = styles()

    const handleChangePage = (event, newPage) => {
        onLoadMore(newPage + 1)
    }

    // === RENDER ===
    return (
        <Paper>
            <Box>
                {header()}
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
                onPageChange={handleChangePage}
            />
        </Paper>
    )
}

export default CTable