import React from 'react';
import { Box, Typography, Button,LinearProgress } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const Container = styled(Box)({
  width: '100%',
  maxWidth: '600px',
  margin: 'auto',
  textAlign: 'center',
  padding: '32px',
  marginTop:'70px'
});

const Title = styled(Typography)({
  fontWeight: 600,
  fontSize: '3rem',
  marginBottom: '15px',
});

const Subtitle = styled(Typography)({
  fontSize: '1.25rem',
  color: '#9e9e9e', // Set a fixed color instead of relying on theme.palette.text.secondary
  marginBottom: '20px',
});

const Description = styled(Typography)({
  fontSize: '1rem',
  color: '#9e9e9e', // Set a fixed color here as well
  marginBottom: '32px',
});

const ProgressWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  marginBottom: '50px',
});

const CheckInvestmentScore = () => {
  return (
    <Container>
      <ProgressWrapper>
        <Typography variant="body2" style={{ color: '#9e9e9e' }}>0%</Typography>
        <LinearProgress
          variant="determinate"
          value={0}
          sx={{
            width: '80%',
            height: '8px',
            borderRadius: '4px',
            backgroundColor: '#e0e0e0',
          }}
        />
      </ProgressWrapper>
      
      <Title variant="h7">RankMF SmartSwitch</Title>
      <Subtitle variant="subtitle1">Evaluate your mutual fund portfolio for free</Subtitle>
      
      <Description>
        Kick out non-performing funds and replace them with RankMF recommendations for better returns.
        RankMF SmartSwitch uses RankMF’s proprietary ranking and rating engine to evaluate your existing
        mutual fund portfolio and recommends the best and right mutual funds that suit your investment profile.
      </Description>
      
      <Button variant="contained" color="primary" size="large" sx={{mt:3,mb:8}} component = {Link} to = "/evaluatePortfolio">
        Evaluate Your Portfolio
      </Button>
    </Container>
  );
};



export default CheckInvestmentScore;
