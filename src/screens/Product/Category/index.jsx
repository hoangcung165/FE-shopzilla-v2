import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, InputBase, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from './style'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CSearchBox from '../../../components/CSearchBox';

const ProductCategory = () => {

    // === DECLARE ===
    const classes = styles()

    const dataExample =
        [
            {},
            {},
            {},
            {},
            {},
        ]


    const [listCategory, setListCategory] = useState(dataExample);
    // === LOGIC ===

    const onSearch = (keySearch) => {
        console.log(keySearch)
    }

    const handleAddNewCategory = () => {
        // insert new category first elemet in list
        let newCategory =
        {
            isNew: true
        }

        setListCategory([newCategory, ...listCategory])

    }

    const onClickDiscardNewCategory = (index) => {
        console.log(index)
        let newListCategory = [...listCategory]
        newListCategory.splice(index, 1)
        setListCategory(newListCategory)
    }


    // === RENDER ===

    const renderTempNewCategory = (item, index) => {
        return (
            <Card>
                <CardActionArea
                    classes={{
                        focusHighlight: classes.focusCategory
                    }}
                >
                    <CardMedia
                        component={'img'}
                        height={140}
                        image='data:image/jpeg;base64,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'
                    />
                    <CardContent>
                        <InputBase sx={{ ml: 1 }}
                            className={classes.inputNewName}
                            placeholder={'Name'}
                        ></InputBase>
                        {/* {renderSubCategory()} */}
                    </CardContent>
                    <CardActions>
                        <Box component={'div'} className={classes.conBtnActionNewCategory} >
                            <Button className={classes.discardNewBtn} onClick={() => onClickDiscardNewCategory(index)}>
                                Discard
                            </Button>
                            <Button className={classes.submitNewBtn}>
                                Submit
                            </Button>
                        </Box>
                    </CardActions>
                </CardActionArea>
            </Card>
        )
    }

    const renderCategory = () => {
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        component={'img'}
                        height={140}
                        image='data:image/jpeg;base64,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'
                    />
                    <CardContent>
                        <Typography variant='h5'>Title</Typography>
                        {renderSubCategory()}
                    </CardContent>
                    <CardActions>
                        <Button size='small'>
                            Disable
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        )
    }

    const renderSubCategory = () => {
        return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        )
    }

    const renderHeaderAction = () => {
        return (
            <Box>
                <Grid container>
                    <Grid item xs={12} sm={6} md={6} >
                        <CSearchBox label='Search' onSearch={onSearch} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Button onClick={handleAddNewCategory}>Create</Button>
                    </Grid>
                </Grid>

            </Box>
        )
    }

    return (
        <Box className={classes.conContainer}>
            {/* header */}
            <Box>
                <Typography variant='h4' color={'primary'}>Category</Typography>
            </Box>
            {renderHeaderAction()}
            {/* container */}
            <Box className={classes.conContent}>
                <Grid container spacing={2}>
                    {listCategory.map((item, index) => {
                        return (
                            <Grid key={index} item xs={12} sm={4} md={4}>
                                {item.isNew ? renderTempNewCategory(item, index) : renderCategory()}
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </Box>
    )
}

export default ProductCategory