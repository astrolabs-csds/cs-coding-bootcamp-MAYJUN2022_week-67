import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import CloseIcon from '@mui/icons-material/Close';
import ListItemText from '@mui/material/ListItemText';

export default function MUISidebar(props) {
    
  return (
    <Drawer
    style={{display: 'block', minWidth: '250px'}}
    open={props.drawerState}
    >
        
        <List>
            <ListItemButton 
            onClick={ props.onToggle }
            variant="outlined" startIcon={<CloseIcon />}>
                <CloseIcon /><ListItemText primary={"Close"} />
            </ListItemButton>
        {
        [
            {
                'text': 'Home',
                'path': '/'
            },
            {
                'text': 'Users',
                'path': '/users'
            },
            {
                'text': 'Login',
                'path': '/login'
            }
        ]
        .map(
            (obj, index) => (
                <ListItem key={obj.text} disablePadding>
                    <ListItemButton component={ReactLink} to={obj.path}>
                        <ListItemText primary={obj.text} />
                    </ListItemButton>
                </ListItem>
            ))}
      </List>
    </Drawer>
  );
}
