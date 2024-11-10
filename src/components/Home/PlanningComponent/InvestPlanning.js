import React from 'react';
import PlanningCard from './PlanningCard';
import { Box, Typography, Grid } from '@mui/material';

const InvestPlanning = () => {
  return (
    <Box sx={{ padding: 3,m:8 }}>
      <Typography variant="h4" sx={{ml:8,mb:7}} gutterBottom>
        Create your Personalized
      </Typography>
      <Grid 
        container 
        spacing={10} 
        justifyContent="center" 
      
      >
        <Grid item>
          <PlanningCard btnName="Tax Planning" />
        </Grid>
        <Grid item>
          <PlanningCard btnName="My Investment Planning" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default InvestPlanning;
