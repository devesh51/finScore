import React from 'react'
import { Box, Typography} from '@mui/material';
// import { Link } from 'react-router-dom';
const LMSCard = ({text,link}) => {
  return (
    <Box 
      sx={{
        border: '1px solid #ccc', // Light gray border
        backgroundColor: '#f0f0f0', 
        borderRadius: 1, // Rounded corners
        padding: 2, // Internal padding
        // width:600,
        height:200,
        textAlign: 'center',
        alignContent:'center',
        boxShadow: 1, // Adds a subtle shadow
        '&:hover': {
          boxShadow: 3 // Increases shadow on hover for a 3D effect
        }
      }}
    >
      <Typography variant="h6" gutterBottom sx={{cursor:'pointer'}}>
        {/* <Button onClick={() => { window.location.href = link }} variant="contained">{text}</Button> */}
        <span onClick={() => { window.location.href = link }} variant="contained"> {text}</span>
      </Typography>
    </Box>
  )
}

export default LMSCard