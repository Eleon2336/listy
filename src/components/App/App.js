import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { amber, cyan, deepOrange, green, pink } from '@mui/material/colors';
import Header from '../Header/Header';

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[700] //for primary interface elements
    },
    secondary: {
      main: pink[400]
    },
    error: {
      main: amber
    },
    warning: {
      main: deepOrange
    },
    info: {
      main: green
    },
    success: {
      main: deepOrange[300]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
