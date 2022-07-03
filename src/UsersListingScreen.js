import React, { useState, useEffect } from 'react';
import MUIHeader from "./MUIHeader";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import MCard from './MCard.js';

function UsersListingScreen() {

    let [loadingState, setLoadingState] = useState(true);


    useEffect(
        function() {
            setTimeout(
                function(){ setLoadingState(false) },
                1000
            )
        },
        []
    )

    return(
        <React.Fragment>
            <MUIHeader />
            <Box mt={4}>
                <Container>

                    {
                        /*loadingState === true && <LinearProgress />*/
                    }
                    
                    {
                        loadingState === true &&
                        <Grid container spacing={2}>
                            <Grid item md={4} sm={12}>
                                <Skeleton variant="rectangular" height={450} />
                            </Grid>
                            <Grid item md={4} sm={12}>
                                <Skeleton variant="rectangular" height={450} />
                            </Grid>
                            <Grid item md={4} sm={12}>
                                <Skeleton variant="rectangular" height={450} />
                            </Grid>
                        </Grid>
                    }

                    {
                        loadingState === false &&
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
                    }

                </Container>
            </Box>
        </React.Fragment>
    )
}

export default UsersListingScreen;