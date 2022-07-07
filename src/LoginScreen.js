import React, { useState } from 'react';
import {Link as ReactLink} from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function LoginScreen() {


  /*
  * ------------------------------------------------------------------------------------
  * Start of Login Procedures
  * ------------------------------------------------------------------------------------
  */

  let [state, setState] = useState("validation error");
  let [errorState, setErrorState] = useState([]);

  // Declare undefined variables for later assignment (ref props)
  let emailField;
  let passwordField;

  // To instantiate a FormData object
  const formData = new FormData();

  function login() {

    // Validate the input
    const errors = [];

    if(emailField.value.length === 0) {
        errors.push("Please enter a valid email address");
    }
    if(passwordField.value.length === 0) {
        errors.push("Please enter a valid password");
    }

    // If input is invalid
    if(errors.length > 0) {
        // show error
        setState("validation error");
        setErrorState(errors);
    }
    // Else,
    else {
        setState("sending");
        setErrorState([]);

        formData.append('email', emailField.value);
        formData.append('password', passwordField.value);
        // fetch (POST)
        fetch(`http://localhost:3011/user/login`, {
            method: 'POST',
            // headers: {"Content-Type": "application/json"},
            body: formData
        })
        // use .json() to convert from string to json
        .then(
            function (backendResponse) {
                return backendResponse.json();
            }
        )
        // store jwt in the browser (user's disk)
        .then((theJson)=>{

            if(theJson.message.email) {
                // setUserState(
                //     {
                //         jsonwebtoken: theJson.message.jsonwebtoken,
                //         firstName: theJson.message.firstName,
                //         lastName: theJson.message.lastName,
                //         email: theJson.message.email,
                //         avatar: theJson.message.avatar,
                //         loginStatus: true
                //     }
                // )
                setState("successful");
            } 
            else if (theJson.message === "Wrong email or password") {
                setState("validation error");
            } 
            else {
                setState("unsuccessful");
            }
        })
        .catch((error)=>{
            console.log(error);
            setState("unsuccessful");
        });
    }
  }

  /*
  * ------------------------------------------------------------------------------------
  * End of Login Procedures
  * ------------------------------------------------------------------------------------
  */


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <center><Typography variant="h3" component="h1">Login</Typography></center>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />


            {
              state !== "sending" &&
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
            }

            {
               state === "sending" &&
                <Box my={3}>
                  <center>
                    <CircularProgress size={64} />
                  </center>
                </Box>
            }

            {
               state === "validation error" &&
               <Alert severity="error">This is an error alert — check it out!</Alert>
            }
            

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" component={ReactLink} variant="body2">
                  Don't have an account? Register
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
