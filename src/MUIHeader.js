import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import MUISidebar from './MUISidebar';

function MUIHeader() {

    let [drawerState, setDrawerState] = useState(false);

    function toggleDrawer() {
        setDrawerState(!drawerState);
    }

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={toggleDrawer}
                        disableRipple={true}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>


                    <Box sx={{flexGrow: 1}}>
                        <IconButton
                            component={ReactLink}
                            to="/"
                            color="inherit"
                        >
                            <HomeIcon />
                        </IconButton>
                    </Box>
                    
                    
                    <Button to="/login" component={ReactLink} disableRipple={true} color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <MUISidebar drawerState={drawerState} onToggle={toggleDrawer}/>
        </React.Fragment>
    )
};

export default MUIHeader;