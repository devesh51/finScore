import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <AppBar  sx={{
      bgcolor : "black",
      pt : "0"
    }}
    position='static'>
      <Container disableGutters>
        <Toolbar
        sx={{
          display: 'flex',
          alignItems:"center"
        }}>        
          <Box sx={{ flexGrow: 0, display: { md: 'flex' }}}>
              <Button
                sx={{ my: 1, color: 'white', display: 'block' , fontSize:'10'}}
                component = {Link}
                to = "/"
              >
              Indiviuals               
              </Button>
              <Button
                sx={{ my: 1, color: 'white', display: 'block' , fontSize:'10'}}
                component = {Link}
                to = "/employee"
              >
              Employers               
              </Button>
              <Button
                sx={{ my: 1, color: 'white', display: 'block' , fontSize:'10'}}
                component = {Link}
                to = "/advisor"
              >
              Advisors               
              </Button>
              <Button
                sx={{ my: 1, color: 'white', display: 'block' , fontSize:'10'}}
                component = {Link}
                to = "/MF-Screener"
              >
              MF Screener               
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar

