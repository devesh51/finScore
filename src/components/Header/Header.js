import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import { Container } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" color="default" disableGutters>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
        {/* Logo and Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ mr: 4 }}>
            MyFinScoreLogo
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






// import React from 'react'

// const Header = () => {
//   return (
//     <div>
//         <div><h1>Logo</h1></div>
//         <nav>
//             <div>
//             <ui>
//                 <li>Evaluate</li>
//                 <li>Learn</li>
//                 <li>Invest</li>
//             </ui>
//             </div>
//             <div>
//                 <button>Login</button>
//                 <button>Get Started</button>
//             </div>
//         </nav>
//     </div>
//   )
// }

// export default Header