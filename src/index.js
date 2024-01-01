import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { amber, cyan, deepOrange, green, pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[700] //for primary interface elements
    },
    secondary: {
      main: pink[400]
    },
    error: amber,
    warning: deepOrange,
    info: green,
    success: {
      main: deepOrange[300]
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);