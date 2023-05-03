import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import CTable from '../../components/CTable'

const StaffManager = () => {
    // === VARIABLE ===
    const {t} = useTranslation()

    
    return (
        <Box>
            <Box>
                <Typography>
                    {t('staff_manager').toUpperCase()}
                </Typography>
            </Box>
            <Box>
                <CTable/>
            </Box>
        </Box>
    )
}

export default StaffManager