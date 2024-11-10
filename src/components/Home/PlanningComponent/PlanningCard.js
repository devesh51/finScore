import React from 'react';
import { Box, Button, Typography } from '@mui/material';
// import { grey } from '@mui/material/colors';

const PlanningCard = ({ btnName }) => {
  return (
    <Box 
      sx={{ 
        border: '1px solid #ccc', // Light gray border
        backgroundColor: '#f0f0f0', 
        borderRadius: 2, // Rounded corners
        padding: 2, // Internal padding
        width: 500, // Set a fixed width or adjust as needed
        height: 300,
        textAlign: 'center',
        boxShadow: 1, // Adds a subtle shadow
        '&:hover': {
          boxShadow: 3 // Increases shadow on hover for a 3D effect
        }
      }}
    >
      <Typography variant="h6" gutterBottom >
        {btnName}
      </Typography>
      <Button variant="contained" color="primary">
        {btnName}
      </Button>
    </Box>
  );
};

export default PlanningCard;

