import { createTheme } from "@mui/material/styles";
import { amber, cyan, deepOrange, green, pink } from '@mui/material/colors';

export const Colors = {
  primary: "#0097a7",
  secondary: "#ec407a",
  success: "#ff8a65",
  info: "#4caf50",
  error: "#ffc107",
  warning: "#ff5722",
  /////SOLID COLOR
  white: "#fff",
  black: "#000"
};

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