import React from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import { LocalShipping, Security, Payment, Public } from '@mui/icons-material';

const DriverPage = () => {
  const iconStyle = { fontSize: 50, color: '#77a5d6' };
  const containerStyle = {
    padding: '100px 100px',
    textAlign: 'center',
  };
  const itemStyle = {
    padding: '20px',
  };

  return (
    <div style={containerStyle}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3} style={itemStyle}>
          <IconButton>
            <LocalShipping style={iconStyle} />
          </IconButton>
          <Typography variant="h6" component="div" gutterBottom>
            Reliable Transport
          </Typography>
          <Typography variant="body1">
            Our fleet ensures timely and safe delivery of your goods.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} style={itemStyle}>
          <IconButton>
            <Security style={iconStyle} />
          </IconButton>
          <Typography variant="h6" component="div" gutterBottom>
            Secure Handling
          </Typography>
          <Typography variant="body1">
            Goods are handled with care and monitored with real-time GPS tracking.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} style={itemStyle}>
          <IconButton>
            <Payment style={iconStyle} />
          </IconButton>
          <Typography variant="h6" component="div" gutterBottom>
            Easy Payment
          </Typography>
          <Typography variant="body1">
            Convenient and secure payment options for hassle-free transactions.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} style={itemStyle}>
          <IconButton>
            <Public style={iconStyle} />
          </IconButton>
          <Typography variant="h6" component="div" gutterBottom>
            Global Network
          </Typography>
          <Typography variant="body1">
            Join our expansive network for global goods sharing.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default DriverPage;
