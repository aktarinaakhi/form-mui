import { Box, Grid, TextareaAutosize, TextField, Typography } from '@mui/material';
import React from 'react';

const AboutCompanyInformationForm = () => {
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ marginTop: '5rem', paddingLeft: '3rem', paddingRight: '3rem', fontSize: '18px', }}
        >

            {/* TextAread field  */}
            <Box>
                <Typography variant="p" sx={{ fontSize: '18px', font: 'Crimson', fontWeight: 'Roman', marginBottom: '20px' }}>
                    About Company*
                </Typography>

                <TextareaAutosize
                    fullWidth
                    style={{ marginTop: '20px', width: '100%', fontSize: '18px', color: '#666666', font: 'Open Sans', height: '150px', opacity: '53%', padding: '1rem 0 0 1rem ' }}
                    type="search"
                    aria-label="empty textarea"
                    placeholder="Type in your Summary"
                />
            </Box>

            {/* half information start */}

            <Grid container sx={{ marginY: '1rem' }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Typography variant="div" sx={{ fontSize: '18px', font: 'Crimson', fontWeight: 'Roman' }}>
                        Website
                    </Typography>

                    <TextField
                        label="Website (Url)"
                        type='text'
                        id="outlined-basic" variant="outlined"
                        sx={{ width: '100%', marginTop: '1rem', font: 'Montserrat' }}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="div" sx={{ fontSize: '18px', font: 'Crimson', fontWeight: 'Roman' }}>
                        Industry*
                    </Typography>
                    <TextField
                        select
                        label="Select industry"
                        type='text'
                        id="outlined-basic" variant="outlined"
                        sx={{ width: '100%', marginTop: '1rem', font: 'Montserrat' }}
                    >

                    </TextField>

                </Grid>


                <Grid item xs={6} sx={{ marginTop: '1rem' }}>
                    <Typography variant="div" sx={{ fontSize: '18px', font: 'Crimson', fontWeight: 'Roman' }}>
                        Company Size*
                    </Typography>

                    <TextField
                        label="Employees"
                        type='text'
                        id="outlined-basic" variant="outlined"
                        sx={{ width: '100%', marginTop: '1rem', font: 'Montserrat' }}
                    />
                </Grid>

                <Grid item xs={6} sx={{ marginTop: '1rem' }}>
                    <Typography variant="div" sx={{ fontSize: '18px', font: 'Crimson', fontWeight: 'Roman' }}>
                        Headquarters
                    </Typography>
                    <TextField
                        label="Enter text"
                        type='text'
                        id="outlined-basic" variant="outlined"
                        sx={{ width: '100%', marginTop: '1rem', font: 'Montserrat' }}
                    >
                    </TextField>
                </Grid>

                <Grid item xs={6} sx={{ marginTop: '1rem' }}>
                    <Typography variant="div" sx={{ fontSize: '18px', font: 'Crimson', fontWeight: 'Roman' }}>
                        Type
                    </Typography>
                    <TextField
                        label="Enter text"
                        type='text'
                        id="outlined-basic" variant="outlined"
                        sx={{ width: '100%', marginTop: '1rem', font: 'Montserrat' }}
                    >
                    </TextField>
                </Grid>

                <Grid item xs={6} sx={{ marginTop: '1rem' }}>
                    <Typography variant="div" sx={{ fontSize: '18px', font: 'Crimson', fontWeight: 'Roman' }}>
                        Founded
                    </Typography>
                    <TextField
                        label="Enter year"
                        type='text'
                        id="outlined-basic" variant="outlined"
                        sx={{ width: '100%', marginTop: '1rem', font: 'Montserrat' }}
                    >
                    </TextField>
                </Grid>
            </Grid>

        </Box>
    );
};

export default AboutCompanyInformationForm;