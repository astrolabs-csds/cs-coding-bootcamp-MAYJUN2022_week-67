import { createTheme, ThemeProvider } from '@mui/material/styles';
import UsersListingScreen from "./UsersListingScreen";

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
      <UsersListingScreen/>
    </ThemeProvider>
  )

}

export default App;