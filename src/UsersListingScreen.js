import React from 'react';
import MUIHeader from "./MUIHeader";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MCard from './MCard.js';

function UsersListingScreen() {
    return(
        <React.Fragment>
            <MUIHeader />
            <Box mt={4}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item md={4} sm={12}>
                            <MCard imageSrc="./logo192.png"/>
                        </Grid>
                        <Grid item md={4} sm={12}>
                            <MCard imageSrc="./logo192.png"/>
                        </Grid>
                        <Grid item md={4} sm={12}>
                            <MCard imageSrc="./logo192.png"/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default UsersListingScreen;