
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const FindAdvisoComponent = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    if (location.trim() === '' || category.trim() === '') {
      alert('Please fill out both fields before searching.');
      return;
    }
    console.log('Searching for advisors in:', location, 'with category:', category);
    // Add search logic here (e.g., API call)
  };

  return (
    <Box sx={{ padding: 2, textAlign: 'center' ,mt:4}}>
      <Typography variant="h4" gutterBottom>
        Find An Advisor Today
      </Typography>
      <Box 
        sx={{ 
          display: 'flex', 
          gap: 2, 
          justifyContent: 'center', 
          alignItems: 'center', 
          marginBottom: 2 
        }}
      >
        <TextField
          label="Enter the city, State or Zipcode"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
          sx={{ maxWidth: 400 }}
        />
        <TextField
          label="Choose Category"
          variant="outlined"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
          sx={{ maxWidth: 400 }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}

export default FindAdvisoComponent;




// import React from 'react'

// const FindAdvisoComponent = () => {
//   return (
//     <div>
//         <h2>Find An Advisor Today</h2>
//         <div>
//             <input type='text' placeholder='Enter the city, State or Zipcode'/>
//             <input type='text' placeholder='Choose Category'/>
//             <button>Search</button>
//         </div>
//     </div>
//   )
// }

// export default FindAdvisoComponent