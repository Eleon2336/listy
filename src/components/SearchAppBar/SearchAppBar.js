import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { 
  Search, 
  SearchIconWrapper, 
  StyledInputBase, 
  NavHeader 
} from './styles-searchappbar';



export default function SearchAppBar() {
  return (
    <Box className="OutterBox" sx={{ width: "100dvw" }}>
      <AppBar position="static" className='AppyBar'>
        <Toolbar className='Toolybar'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ display: {xs: "inline-flex", sm: "none"}, mr: 2 }}
            className='IconyButton'
          >
            <MenuIcon className='MenuyIcon' />
          </IconButton>
          <NavHeader
            noWrap
            component="div"
          >
            LISTY
          </NavHeader>
          <Search className='Searchy'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
