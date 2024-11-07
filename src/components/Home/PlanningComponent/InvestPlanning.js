import React from 'react';
import PlanningCard from './PlanningCard';
import { Box, Typography, Grid } from '@mui/material';

const InvestPlanning = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
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
