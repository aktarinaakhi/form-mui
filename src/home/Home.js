import { Box, Toolbar } from '@mui/material';
import React from 'react';
import banner from "../assets/Mask Group.png"
import logo from "../assets/Group.png"
import pencil from "../assets/pencil.png"
import AboutCompanyInformationForm from './AboutCompanyInformationForm';
import Benefits from './Benefits';

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
                        left: '16%',
                        zIndex: 'tooltip',
                        bgcolor: 'background.paper',
                        height: '4rem',
                        width: '1rem',
                        borderRadius: '50%',
                        paddingY: '0',
                        border: '1px solid #EDEDED'
                    }}>

                    <img sx={{ width: '100%', paddingY: '0' }} src={pencil} alt="logo" />
                </Toolbar>

                <Toolbar
                    sx={{
                        justifyContent: 'left',
                        position: 'relative',
                        top: -230,
                        left: '93%',
                        zIndex: 'tooltip',
                        bgcolor: 'background.paper',
                        height: '4rem',
                        width: '1rem',
                        borderRadius: '50%',
                        border: '1px solid #EDEDED',
                        alignItems: 'center'
                    }}>

                    <img sx={{ width: '100%', }} src={pencil} alt="logo" />
                </Toolbar>

                <AboutCompanyInformationForm></AboutCompanyInformationForm>
                <Benefits></Benefits>
            </Box>
        </Box>
    );
};

export default Home;