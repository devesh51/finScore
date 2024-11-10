import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";


const FindAdvisorComponent = () => {
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const nav = useNavigate()


  const handleSearch = () => {
    if (state.trim() === '' || city.trim() === '' || category.trim() === '') {
      alert('Please fill out all fields before searching.');
      return;
    }
    console.log('state is:', state, 'category is:', category, 'city is:', city);
    const Data = {
      state:state,
      city:city,
      category: category
    }
    return nav("/AdvisorPage", { state:Data});
  };

  return (
    <Box sx={{ padding: 2, textAlign: 'center', paddingBlock: 10, backgroundColor: '#f0f0f0' }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Find An Advisor Today
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 2,
        }}
      >
        <Box sx={{ minWidth: 220, backgroundColor: 'white' }}>
          <FormControl fullWidth>
            <InputLabel id="state-select-label">State</InputLabel>
            <Select
              labelId="state-select-label"
              id="state-select"
              value={state}
              label="State"
              onChange={(e) => setState(e.target.value)}
            >
              <MenuItem value={"karnataka"}>Karnataka</MenuItem>
              <MenuItem value={"MAHARASHTRA"}>Maharashtra</MenuItem>
              <MenuItem value={"GUJARAT"}>Gujarat</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        <Box sx={{ minWidth: 150, backgroundColor: 'white' }}>
          <FormControl fullWidth>
            <InputLabel id="city-select-label">City</InputLabel>
            <Select
              labelId="city-select-label"
              id="city-select"
              value={city}
              label="City"
              onChange={(e) => setCity(e.target.value)}
            >
              <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
              <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
              <MenuItem value={"Kolhapur"}>Kolhapur</MenuItem>
              <MenuItem value={"Vadodara"}>Vadodara</MenuItem>
              
            </Select>
          </FormControl>
        </Box>
        
        <Box sx={{ minWidth: 400, backgroundColor: 'white' }}>
          <FormControl fullWidth>
            <InputLabel id="category-select-label">Choose Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={category}
              label="Choose Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={"RIA"}>RIA</MenuItem>
              <MenuItem value={"RA"}>RA</MenuItem>
              <MenuItem value={"MFD"}>MFD</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
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
};

export default FindAdvisorComponent;
