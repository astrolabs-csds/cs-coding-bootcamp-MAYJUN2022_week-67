import React from 'react';
import MUIHeader from "./MUIHeader";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function UsersListingScreen() {
    return(
        <React.Fragment>
            <MUIHeader />
            <Container>
                <Grid container>
                    <Grid></Grid>
                    <Grid></Grid>
                    <Grid></Grid>
                </Grid>
            </Container>
        </React.Fragment>
    
    )
}

export default UsersListingScreen;