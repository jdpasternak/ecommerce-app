import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';

const productsList = [
    {
        name: 'Product 1',
        id: '1234',
        description: 'Product 1 description',
    }
]

const ProductDetailsPage = props => {
    const { productId } = useParams();
    const [productInfo, setProductInfo] = useState(productsList.filter(p => p.id === productId));

    return <Box sx={{ display: 'flex' }}>
        <SwipeableTextMobileStepper />
        <Box>
            <Typography>{productInfo.name || 'someting went wrong'}</Typography>
        </Box>
    </Box>
}

export default ProductDetailsPage;