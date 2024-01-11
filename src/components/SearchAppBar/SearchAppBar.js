import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Colors} from "../../theme/theme";
import { 
  Search, 
  SearchIconWrapper, 
  StyledInputBase, 
  NavHeader,
  PokeLink 
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
          <PokeLink 
            to={"/normal"} 
            style={({ isActive }) => {
              return {
                color: isActive ? Colors.activeLink : "white",
                fontWeight: isActive ? "bold" : "",
                textShadow: isActive ? "2px 2px 6px #FFFFFF" : ""
              };
            }}
          >
            Normal
          </PokeLink>
          <PokeLink 
            to={"/grass"} 
            style={({ isActive }) => {
              return {
                color: isActive ? Colors.activeLink : "white",
                fontWeight: isActive ? "bold" : "",
                textShadow: isActive ? "2px 2px 6px #FFFFFF" : ""
              };
            }}
          >
            Grass
          </PokeLink>
          <PokeLink 
            to={"/fire"} 
            style={({ isActive }) => {
              return {
                color: isActive ? Colors.activeLink : "white",
                fontWeight: isActive ? "bold" : "",
                textShadow: isActive ? "2px 2px 6px #FFFFFF" : ""
              };
            }}
          >
            Fire
          </PokeLink>
          <PokeLink 
            to={"/water"} 
            style={({ isActive }) => {
              return {
                color: isActive ? Colors.activeLink : "white",
                fontWeight: isActive ? "bold" : "",
                textShadow: isActive ? "2px 2px 6px #FFFFFF" : ""
              };
            }}
          >
            Water
          </PokeLink>
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
