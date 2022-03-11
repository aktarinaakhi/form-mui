import { Box, Toolbar } from '@mui/material';
import React from 'react';
import banner from "../assets/Mask Group.png"
import logo from "../assets/Group.png"
import edit from "../assets/Ellipse 1140.png"
import EditIcon from '@mui/icons-material/Edit';

const Home = () => {

    return (
        <Box sx={{ bgcolor: '#F7F6FB', paddingTop: '40px' }}>

            {/* for banner  */}
            <Box
                sx={{
                    bgcolor: 'white',
                    width: '1242px',
                    margin: 'auto'
                }}>

                <Toolbar
                    sx={{
                        justifyContent: 'center',
                        position: 'absolute',
                        marginLeft: '-24px'
                    }}>
                    <img sx={{ width: '100%' }} src={banner} alt="logo" />
                </Toolbar>

                <Toolbar
                    sx={{
                        justifyContent: 'left',
                        position: 'relative',
                        top: 160,
                        left: '2%',
                        zIndex: 'tooltip',
                    }}>
                    <img sx={{}} src={logo} alt="logo" />
                </Toolbar>

                <Toolbar
                    sx={{
                        justifyContent: 'left',
                        position: 'relative',
                        top: 90,
                        left: '13%',
                        zIndex: 'tooltip',
                    }}>
                    <img sx={{}} src={edit} alt="logo" />
                </Toolbar>

                <Toolbar
                    sx={{
                        justifyContent: 'left',
                        position: 'relative',
                        top: 19,
                        left: '15%',
                        zIndex: 'tooltip',
                    }}>
                    <EditIcon></EditIcon>
                </Toolbar>
            </Box>

            {/* for form  */}

        </Box>
    );
};

export default Home;