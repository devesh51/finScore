import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const MyFinScoreResearch = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Box 
        sx={{ 
          border: '1px solid #ccc', 
          borderRadius: 2, 
          padding: 3, 
          boxShadow: 1,
          marginBottom: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          Proprietary Research & MyFinScore Method
        </Typography>
        <Typography variant="body1" paragraph>
          India’s only technology-driven research which evaluates 20 million market and fundamental data points to recommend the best mutual fund investments.
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginBottom: 2 }}>
          Learn More
        </Button>
        
        {/* Nested box for image and text side by side */}
        <Box 
          sx={{ 
            border: '1px solid #ccc', 
            borderRadius: 2, 
            padding: 2, 
            boxShadow: 1, 
            marginTop: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Box 
            component="img"
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Investment Planning"
            sx={{ width: '150px', height: 'auto', borderRadius: 1 }}
          />
          <Typography variant="body1">
            Image and text that represents Investment Planning (Hook Line with image)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MyFinScoreResearch;




// import React from 'react'

// const MyFinScoreResearch = () => {
//   return (
//     <div>
//         <div>
//             <h2>Proprietary Rearch & MyFinScore Method</h2>
//             <p>India’s only technology driven research which evaluates 20 million market and fundamental data points to recommend best mutual fund investments.</p>
//             <button>Learn More</button>
//         </div>
//         <div>
//             <p>Image and text that represents Investment planning (Hook Line with image)</p>
//         </div>
//     </div>
//   )
// }

// export default MyFinScoreResearch