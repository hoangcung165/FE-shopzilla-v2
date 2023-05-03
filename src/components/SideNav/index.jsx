import { Avatar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { drawerWidth } from '../../utils/common';
import { useTranslation } from 'react-i18next';
import { Home, Person, People} from '@mui/icons-material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DomainIcon from '@mui/icons-material/Domain';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './style';

const SideNav = (
   {
    open = false
   }
) => {

    // === VARIABLES ===
    const { t } = useTranslation();
    const nagative = useNavigate();
    const location = useLocation();
    const classes = styles();

    const listActions = [
        {title: t('dashboard'), url: '/dashboard' , icon: <Home className={classes.iconMenu}/>, placeHolder: t('dashboard')},
        {title: t('staff_manager'), url: '/staff_manager' , icon: <Person className={classes.iconMenu}/>, placeHolder: t('staff_manager')},
        {title: t('customer_manager'), url: '/customer_manager' , icon: <People className={classes.iconMenu}/>, placeHolder: t('customer_manager')},
        {title: t('porject_manager'), url: '/porject_manager' , icon: <LocalGroceryStoreIcon className={classes.iconMenu}/>, placeHolder: t('porject_manager')},
        {title: t('bill_manager'), url: '/bill_manager' , icon: <MonetizationOnIcon className={classes.iconMenu}/>, placeHolder: t('bill_manager')},
        {title: t('brand_manager'), url: '/brand_manager' , icon: <DomainIcon className={classes.iconMenu}/>, placeHolder: t('brand_manager')},
        {title: t('news_manager'), url: '/news_manager' , icon: <NewspaperIcon className={classes.iconMenu}/>, placeHolder: t('news_manager')},
    ];

    // === LOGIC ===
    const onClickMenu = (menu) =>{
        nagative(menu.url)
    }

    console.log(location)

    // === RENDER HANDLE ===
    const renderMenu = () =>{
        return(
            <Box   className={classes.conNavContainer}>
                <Toolbar>        
                </Toolbar>
                <Divider/>
               <List>
                    {listActions.map((item, index) =>{
                        let active = item.url === location.pathname;
                        return(
                            <ListItemButton key={`menu_${index}`} 
                                className={`${classes.conMenuIcon}` }
                                placeholder={`${item.placeHolder}`}
                                onClick={() => onClickMenu(item)}
                                >
                                <ListItemIcon >
                                    <Avatar variant="rounded" className={`${ active ? classes.conMenuIconActive : ''}`}>{item.icon}</Avatar>
                                </ListItemIcon>
                                <ListItemText 
                                    sx={{fontSize : '14px important'}} 
                                    className={`${classes.textMenu} ${ active ? classes.textMenuActive : ''}`} 
                                    primary={
                                        <Typography sx={{ fontSize: '14px'}}>
                                            {item.title}
                                        </Typography>
                                    }/>
                            </ListItemButton>
                        )
                    })}
               </List>
               <Divider/>
               <Toolbar>        
                </Toolbar>
              
            </Box>
        )
    }
    return (
        <Box component={'nav'}
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders">
            <Drawer 
                open={true}
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                  }}
            >
                    {renderMenu()}
            </Drawer>
            <Drawer open={open}
                    variant={'temporary'}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                      }}
                    >
                {renderMenu()}
            </Drawer>
      </Box>
    )
}

export default SideNav