import { createTheme } from "@mui/material/styles";
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
    }
  });

  export default theme;