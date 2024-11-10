import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
// import { Container } from '@mui/material';
import logoImg from "../../asset/logoImg.jpg"

const Header = () => {
  return (
    <AppBar position="static" color="default" disableGutters>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
        {/* Logo and Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6"  sx={{ mr: 4 }} component = {Link} to = "/">
            <img src={logoImg} alt="logo img" style={{ width: '45px', height: '45px' }}/>
          </Typography>
          <Box component="ul" sx={{ display: 'flex', listStyle: 'none', p: 0, m: 0 }}>
            <Typography component="li" sx={{ mr: 3, cursor: 'pointer' }}>Evaluate</Typography>
            <Typography component="li" sx={{ mr: 3, cursor: 'pointer' }}>Learn</Typography>
            <Typography component="li" sx={{ cursor: 'pointer' }}>Invest</Typography>
          </Box>
        </Box>

        {/* Buttons on the right */}
        <Box>
          <Button variant="text" color="inherit" sx={{ mr: 2 }}>Login</Button>
          <Button variant="contained" color="primary">Get Started</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

