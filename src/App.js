import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LayoutRoute from './LayoutRoute';
import UsersListingScreen from "./UsersListingScreen";
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

const theme = createTheme(
  {
    palette: {
      type: 'light',
      primary: {
        main: '#455a64',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#e0e0e0',
      },
    },
    typography: {
      fontFamily: 'Raleway',
    },
  }
);

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <LayoutRoute path="/" exact={true} component={HomeScreen} />
          <LayoutRoute path="/users" exact={true} component={UsersListingScreen} />
          <LayoutRoute path="/login" exact={true} component={LoginScreen} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )

}

export default App;