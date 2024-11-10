import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const ToolCard = ({ text, btnName, clickHandler }) => {
  return (

    <Box 
      sx={{ 
        border: '1px solid #ccc', // Light gray border
        backgroundColor: '#f0f0f0', 
        borderRadius: 2, // Rounded corners
        padding: 2, // Internal padding
        width: 300, // Set a fixed width or adjust as needed
        height: 200,
        textAlign: 'center',
        alignContent:'center',
        boxShadow: 1, // Adds a subtle shadow
        '&:hover': {
          boxShadow: 3 // Increases shadow on hover for a 3D effect
        }
      }}
    >
      <Typography  gutterBottom>
        {text}
      </Typography>
      <Button variant="contained" color="primary" onClick={clickHandler} component = {Link} to = "/checkInvestmentScore">
        {btnName}
      </Button>
    </Box>
  );
};

export default ToolCard;


