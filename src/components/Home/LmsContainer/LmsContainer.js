import React from 'react';
import { Box, Typography,Grid } from '@mui/material';
import LMSCard from './LMSCard';
// import { Link } from 'react-router-dom';


const LmsContainer = () => {

  return (
    <Box sx={{ maxWidth:'100%', textAlign: 'center', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        LMS
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        Tiles of the course, Certifications and links to LMS page (Selling Tiles)
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={4} sm={3} md={4} lg={3}>
          <LMSCard text="Be Job Ready For Finance" link="https://myfinscore.graphy.com/products" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <LMSCard text="Become a investment professional"  link="https://myfinscore.graphy.com/products"/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <LMSCard text="Become an aware investor" link="https://myfinscore.graphy.com/products" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LmsContainer;
