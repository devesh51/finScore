import React from 'react';
import ToolCard from './ToolCard';
import { Grid, Box, Typography } from '@mui/material';

const CheckScoreSection = () => {
  return (
    <Box 
      sx={{ 
        height: '70vh', 
        padding: 5, 
        display: 'flex',
        mt:8,
        justifyContent: 'space-between' 
      }}
    >
      {/* Combined section for introductory text and ToolCards */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="body1" sx={{ color: '#333',textAlign:'center'}}>
            Let's evaluate My Financial Wealth with my <b>MyFinScore</b>
          </Typography>
          <Typography variant="h4" sx={{ mt: 2, fontWeight: 'bold', color: '#1976d2' , textAlign:'center'}}>
            Do You Know
          </Typography>
          {/* ToolCards in a Grid layout */}
        <Grid 
        container 
        spacing={7}
        mt={12} 
        justifyContent="center"  
      >
        <Grid item>
        <ToolCard 
              text="Did you pay additional taxes last year?" 
              btnName="MyTaxScore" 
              clickHandler={() => { console.log('Tax score button clicked') }} 
            />
        </Grid>
        <Grid item>
        <ToolCard 
              text="Is your mutual fund portfolio doing better than the benchmark?" 
              btnName="My Investment Score" 
              clickHandler={() => { console.log('Investment score button clicked') }} 
            />
        </Grid>
      </Grid>
      </Box>
        </Box>

      {/* Right section with video content */}
      <Box 
        sx={{ 
          backgroundColor: '#f0f0f0', 
          width: '40%', // Adjust the width as needed
          height: '80%', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}
      >
        <Typography variant="h6">Demo Video Placeholder</Typography>
      </Box>
    </Box>
  );
};

export default CheckScoreSection;


