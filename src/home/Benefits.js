import { Box, Typography } from '@material-ui/core';
import React from 'react';

const Benefits = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingX: '3rem'

            }}
        >
            <Typography variant="p" sx={{ fontSize: '20px', font: 'Montserrat', fontWeight: 'Medium', marginY: '3rem', color: '#F15A29' }}>
                Benefits
            </Typography>

            <Typography variant="div" sx={{ marginY: '3rem', padding: '.7rem 2rem', borderRadius: '50px', font: 'Open Sans', fontSize: 18, fontWeight: 'Regular', border: '1px solid #C1C1C1' }}>
                Add Benefits
                {/* <Button variant="outlined" style={{ padding: '.7rem 2rem', borderRadius: '50px', font: 'Open Sans', fontSize: 18, fontWeight: 'Regular' }}> </Button> */}

            </Typography>
        </Box>
    );
};

export default Benefits;