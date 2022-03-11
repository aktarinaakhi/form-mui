import { AppBar, Box, Divider, Popover, Toolbar, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { makeStyles } from "@material-ui/core/styles";
import React from 'react';

const Navigation = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const useStyles = makeStyles(() => ({
        Header: {
            display: 'flex',
            justifyContent: 'center',
            marginLeft: 'auto',
            alignItems: 'center'
        }
    }));

    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" sx={{ bgcolor: "white", boxShadow: 'none', borderBottom: '1px solid #707070', height: '122px', paddingRight: '10vh', justifyContent: 'center', }}>
                <Toolbar>
                    <Box className={classes.Header}>
                        <Typography ml={3} variant="p" color="#666666">
                            Company
                        </Typography>
                        <Typography ml={3} variant="p" color="#666666">
                            Find Candidate
                        </Typography>
                        <Typography mx={3} my={2} variant="p" color="#666666">
                            Guide
                        </Typography>

                        <Divider orientation="vertical" variant="middle" flexItem />

                        <div>
                            <Typography
                                aria-owns={open ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}
                                ml={1} variant="p" color="#F15A29"
                            // sx={{ margin: 'auto', alignItems: 'center' }}
                            >
                                <Typography mr={1} ml={2} variant="p" color="black">
                                    <PersonIcon />
                                </Typography>
                                Hi, Elise
                            </Typography>
                            <Popover
                                id="mouse-over-popover"
                                sx={{
                                    pointerEvents: 'none',
                                    marginTop: '20px',

                                }}
                                open={open}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                onClose={handlePopoverClose}
                                disableRestoreFocus
                            >
                                <Typography sx={{ px: '40px', py: '5px', color: 'black' }}>Home</Typography>
                                <Divider />
                                <Typography sx={{ px: '40px', py: '5px', color: 'black' }}>My Account</Typography>
                                <Divider />
                                <Typography sx={{ px: '40px', py: '5px', color: 'black' }}>Sign out</Typography>
                                <Divider />
                            </Popover>
                        </div>

                    </Box>

                </Toolbar>
            </AppBar>

        </div>
    );
};

export default Navigation;