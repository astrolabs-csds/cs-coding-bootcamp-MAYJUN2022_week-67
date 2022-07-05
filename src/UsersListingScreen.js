import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import MCard from './MCard.js';

function UsersListingScreen() {

    let [loadingState, setLoadingState] = useState(true);
    let [dataState, setDataState] = useState([]);


    useEffect(
        function() {

            fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            // convert string to json
            .then(
                function(stringResponse) { return stringResponse.json() }
            )
            // use json data
            .then(
                function(jsonResponse) {
                    setDataState( jsonResponse );
                    setLoadingState( false );
                }
            )

        },
        []
    )

    return(
        <React.Fragment>
            <Box mt={4}>
                <Container>

                    {
                        /*loadingState === true && <LinearProgress />*/
                    }
                    
                    {
                        loadingState === true &&
                        <Grid container spacing={2}>
                            {
                                [1,2,3,4,5,6,7,8,9,10].map(
                                    function() {
                                        return (
                                            <Grid item md={4} xs={12}>
                                                <Skeleton variant="rectangular" height={450} />
                                            </Grid>
                                        )
                                    }
                                )
                            }
                            
                        </Grid>
                    }

                    {
                        loadingState === false &&
                        <Grid container spacing={2}>
                            {
                                dataState.map(
                                    function(dataObj) {
                                        return (
                                        <Grid item md={4} xs={12}>
                                            <MCard imageSrc={dataObj['thumbnailUrl']}/>
                                        </Grid>
                                        )
                                    }
                                )
                            }
                        </Grid>
                    }

                </Container>
            </Box>
        </React.Fragment>
    )
}

export default UsersListingScreen;