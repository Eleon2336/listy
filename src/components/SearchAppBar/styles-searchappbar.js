import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Typography } from '@mui/material';

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export const NavHeader = styled(Typography)(({ theme }) => ({
  flexGrow: "1",
  display: "block",
  fontSize: "1.5rem",
  paddingLeft: "1.5rem",
  fontWeight: "bold",
  textShadow: "2px 2px 4px #FFFFFF",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.25rem"
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem"
  },
  [theme.breakpoints.down("sm")]: {
    display: "none"
  }
}));