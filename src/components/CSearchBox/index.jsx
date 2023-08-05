import { Icon, IconButton, InputAdornment, InputBase } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import style from './style';


const CSearchBox = (
    {
        label = 'Search',
        onSearch = () => { }
    }
) => {
    // === VARIABLE ===
    const [keySearch, setKeySearch] = useState('')
    const classes = style()

    const handleSearch = () => {
        onSearch(keySearch)
    }

    return (
        <InputBase sx={{ ml: 1, flex: 1 }}
            className={classes.conBoxSearch}
            placeholder={label}
            inputProps={{ 'aria-label': label }}
            value={keySearch}
            onChange={(event) => setKeySearch(event.target.value)}
            endAdornment={
                <InputAdornment position='end'>
                    <IconButton type='button' onClick={handleSearch}>
                        <SearchIcon />
                    </IconButton>
                </InputAdornment>
            }
        />


    )
}

export default CSearchBox