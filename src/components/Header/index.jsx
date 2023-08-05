import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './style';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Header = ({
    handleOpenMenu = () => { }
}) => {
    const classes = styles();
    const { t } = useTranslation();
    const nagative = useNavigate();
    const [anchorElUser, setAnchorElUser] = useState(null)

    const listAccountMenu = [
        { title: t("account_menu_profile"), path: '/user/my_profile', icon: '' }
    ]

    // === LOGIC EVENT ===
    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }
    const handleMenuUser = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleUserMenuClick = (menu) => {
        nagative(menu.path)
    }


    // === RENDER ===
    const menuAccount = () => {
        return (
            <Menu
                sx={{ mt: '45px' }}
                id='menu-account'
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {listAccountMenu.map((item, index) => {
                    return (
                        <MenuItem key={index}>
                            <Typography textAlign={'center'} onClick={() => handleUserMenuClick(item)}>{item.title}</Typography>
                        </MenuItem>
                    )
                })}
                <MenuItem>
                    <Typography textAlign={'center'}>{t("account_menu_logout")}</Typography>
                </MenuItem>
            </Menu>
        )

    }
    return (
        // <Box>
        <AppBar position='fixed'>
            <Toolbar className={classes.conToolBar}>
                <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                    aria-label='menu'
                    onClick={handleOpenMenu}>
                    <MenuIcon />
                </IconButton>

                <Box flexGrow={1}></Box>
                <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    <IconButton onClick={handleMenuUser}>
                        <AccountCircleIcon />
                    </IconButton>
                    {menuAccount()}
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </Box>

            </Toolbar>
        </AppBar>
        // </Box>
    )
}

export default Header