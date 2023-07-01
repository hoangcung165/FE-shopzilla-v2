import React from 'react'
import styles from '../Login/style'
import { Box, Button, Checkbox, CircularProgress, Container, FormControl, Grid, Icon, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import { Colors } from '../../utils/common/color'
import { useTranslation } from 'react-i18next';
import i18n from '../../service/lang/i18n';
import i18nA from "i18next";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';
import { USER_LOGIN_ACTION } from '../../redux/type';
import { Helper } from '../../utils/helpers';


const Login = () => {
    // === LOGIC ===
    const className = styles()
    const { t } = useTranslation()
    const dispacth = useDispatch();

    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const onHandleLogin = () => {
        //TODO validation
        console.log(userName, password)

        let params = {
            username: userName, password
        }
        dispacth({
            type: USER_LOGIN_ACTION,
            payload: {
                params,
                callback: (success, res) => {

                }
            }
        })


    }


    // === RENDER ===
    return (
        <Box
            display={'flex'} alignItems={'center'}
            sx={{
                height: '100vh',
                background: `${Colors.backgroudLogin}`,
                padding: '15px'
            }} >
            <Container className={className.conLayout}>

                <Grid container direction='column' display='flex' alignItems='center' justifyContent={'center'} spacing={3}>
                    <Grid item className={className.conTitle}>
                        <Typography variant='span' className={className.textTitle}>{t("login_title")}</Typography>
                    </Grid>
                    <Grid item className={className.conInput}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <FormControl fullWidth>
                                <InputLabel size='medium' htmlFor="standard-adornment-username">{t('username_text')}</InputLabel>
                                <Input
                                    id="standard-adornment-username"
                                    type={'text'}
                                    onChange={(event) => setUserName(event.target.value)}
                                    startAdornment={<InputAdornment position="start"> <PersonIcon /></InputAdornment>}
                                />

                            </FormControl>

                        </Box>
                    </Grid>
                    <Grid item className={className.conInput}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <FormControl fullWidth>
                                <InputLabel size='medium' htmlFor="standard-adornment-password">{t('password_text')}</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'password' : 'text'}
                                    onChange={(event) => setPassword(event.target.value)}
                                    startAdornment={<InputAdornment position="start"> <LockIcon /></InputAdornment>}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword((show) => !show)}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    } />

                            </FormControl>

                        </Box>
                    </Grid>
                    <Grid item className={className.conInput} display={'flex'} justifyContent={'flex-end'}>
                        <Button variant="text">{t('fogot_pass_text')}</Button>
                    </Grid>
                    <Grid item className={className.conInput}>
                        <Button
                            className={className.buttonLogin}
                            size="large"
                            onClick={onHandleLogin}
                        >
                            {t('login_btn_label')}
                        </Button>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}

export default Login