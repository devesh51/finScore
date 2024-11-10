import React from 'react';
import { Box, Typography, TextField, Button, LinearProgress } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const Container = styled(Box)({
  width: '80%',
  maxWidth: '500px',
  margin: '0 auto',
  padding: '32px',
  textAlign: 'center',
  backgroundColor: '#ffffff',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
});

const ProgressWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  marginBottom: '16px',
});

const FormWrapper = styled(Box)({
  marginTop: '24px',
});

const StyledButton = styled(Button)({
  marginTop: '24px',
  padding: '12px 24px',
  backgroundColor: '#FFA000',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#FF8F00',
  },
});

const EvaluatePortfolio = () => {
  return (
    <Box sx={{ backgroundColor: '#f7f7f7', minHeight: '70vh', padding: '32px' }}>
      <ProgressWrapper>
        <Typography variant="body2" style={{ color: '#1976d2' }}>35%</Typography>
        <LinearProgress
          variant="determinate"
          value={35}
          sx={{
            width: '80%',
            height: '8px',
            borderRadius: '4px',
            backgroundColor: '#e0e0e0',
          }}
        />
      </ProgressWrapper>

      <Container>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Great Choice, You Look Like a Responsible Investor
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Get started, enter your name, mobile number, and email. Please note these details will be used to send you your portfolio analysis report.
        </Typography>

        <FormWrapper>
          <TextField
            fullWidth
            label="Please enter your name"
            placeholder="Eg. Rahul Sharma"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Please enter your email"
            placeholder="Email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Please Enter a valid mobile number"
            placeholder="Mobile"
            margin="normal"
            variant="outlined"
          />
          
          <StyledButton variant="contained" component={Link} to = "/uploadCASComponent">
            Next
          </StyledButton>
        </FormWrapper>
      </Container>
    </Box>
  );
};

export default EvaluatePortfolio;
