import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import { Assets } from '../../config'
import { Box } from '@mui/material'

const CLoading = () => {
    return (
        <Box>
            <Player
                autoplay={true}
                loop={true}
                src={Assets.lottieLoading}
                style={{ width: 200 }}
            />
        </Box>
    )
}

export default CLoading