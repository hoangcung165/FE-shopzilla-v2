import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import React from 'react'
import { Configs } from '../../config'

const CTable = ({
    data,
    rowPerPages = Configs.rowPerPage,
    totalPage = Configs.pageSize,
    page = 1,
    onLoadMore = () =>{} ,
    ...props
}) => {

    const dataTable = {
        headers: [
            {name: 'Name', id: 'name', align: 'center' ,isCustome: false},
            {name: 'Email', id: 'email', align: 'center'  ,isCustome: false},
            {name: 'UserName', id: 'username', align: 'center', isCustome: false},
        ],
        rows:[
            {name: 'Cung', email: 'hoangcung@gmail.com', username: 'cung'}
        ]
    }
    console.log(rowPerPages)
    
    return (
        <Paper>
            <TableContainer>
               <Table>
                 <TableHead>
                    <TableRow>
                        {dataTable.headers.map((header) =>{
                            return (
                                <TableCell key={header.id}  align={header.align}>
                                    {header.name}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataTable.rows.map((row, rowIndex)=>{
                        return(
                            <TableRow 
                                key={`row_${rowIndex}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                hover
                            >
                                {dataTable.headers.map((header,headerIndex) =>{
                                    return(
                                        <Box 
                                            key={`cell_${headerIndex}`}
                                            component={'td'}
                                            align={header.align}
                                        >
                                            <Typography>{row[header.id]}</Typography>
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