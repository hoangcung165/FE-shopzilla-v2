import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <Box>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        sx={{ mr: 2, display: { sm: 'none' } }}
                        aria-label='menu'>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header