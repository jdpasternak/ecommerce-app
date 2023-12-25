import { Box, Typography } from '@mui/material';
import React from 'react';

const NotFoundPage = props => {
    return <Box>
        <Typography variant="h3">Error - Page Not Found</Typography>
        <Typography variant="body1">Sorry, the page you're looking for doesn't exist.</Typography>
    </Box>
}

export default NotFoundPage;