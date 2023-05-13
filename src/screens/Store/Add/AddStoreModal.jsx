import { Box, Button, Divider, Grid, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from './style'
import { useDispatch } from 'react-redux'
import { CREATE_STORE_ACTION } from '../../../redux/type'

const AddStoreModal = (
    {
        open = false,
        onClose = () => { },
        data = null,
        onSuccess = () => { },
        title = ""
    }
) => {

    // === INSTANCE ===
    const classes = styles()
    const dispatch = useDispatch()
    const [name, setName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)
    const [address, setAddress] = useState(null)

    // === LOGIC ===
    const handleSubmit = () => {
        let params = {
            name,
            phone,
            email,
            address
        }
        dispatch({
            type: CREATE_STORE_ACTION,
            payload: {
                params,
                callback: (success, res) => {
                    console.log(res)
                }
            }
        })
    }

    // === RENDER ===
    return (
        <Modal
            open={open}
            onClose={onClose}
            disableAutoFocus={true}
        >
            <Box className={classes.conModal}>
                <Grid container direction={'column'} display={'flex'} alignItems={'center'}>
                    <Grid item>
                        <Typography variant='h4'>{title}</Typography>
                    </Grid>
                    <Grid item className={classes.conBoxField}>
                        <Typography className={classes.txtLabelInput}>Name</Typography>
                        <TextField
                            className={classes.conFieldInput}
                            fullWidth
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            margin={'dense'}
                            disabled={false} />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.txtLabelInput}>Phone</Typography>
                        <TextField
                            className={classes.conFieldInput}
                            fullWidth
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            margin={'dense'}
                            disabled={false} />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.txtLabelInput}>Email</Typography>
                        <TextField
                            className={classes.conFieldInput}
                            fullWidth
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            margin={'dense'}
                            disabled={false} />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.txtLabelInput}>Address</Typography>
                        <TextField
                            className={classes.conFieldInput}
                            fullWidth
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                            margin={'dense'}
                            disabled={false} />
                    </Grid>

                </Grid>
                <Box mt={5} className={classes.conBoxFooter} display={'flex'} justifyContent={'flex-end'}>
                    <Button size={'large'} className={classes.btnCancel} onClick={onClose}>Cancel</Button>
                    <Button size={'large'} className={classes.btnAdd} onClick={handleSubmit}>Add</Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default AddStoreModal