import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const GoodsSharing = ({ onJoinNowClick }) => {
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState('');

  const handleClickOpen = (content) => {
    setDialogContent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const gridItems = [
    { title: 'Drive', content: "Keep your plans!Hit the road just as you anticipated and make the most of your vehicle's empty seats." },
    { title: 'Share', content: "Travel with good company.  Share a memorable ride with travelers from all walks of life." },
    { title: 'Save', content: "Tolls, petrol,  electricity...   Easily divvy up all the costs with other passengers." }
  ];

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Drive. Share. Save.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {gridItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              style={{ padding: '1rem', textAlign: 'center', cursor: 'pointer' }}
              onClick={() => handleClickOpen(item.content)}
            >
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body1">{item.content}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} style={{ marginTop: '2rem', textAlign: 'center' }} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="h5">Join 21 million</Typography>
          <Typography variant="body1">drivers already using BlaBlaCar</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h5">More than 100 million</Typography>
          <Typography variant="body1">BlaBlaCar members worldwide</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h5">Over 40 million</Typography>
          <Typography variant="body1">rides shared per year</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: '2rem', textAlign: 'center' }} justifyContent="center">
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={onJoinNowClick}>
            Join Now
          </Button>
        </Grid>
      </Grid>

      {/* Dialog for Pop-up */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{dialogContent.split(' ')[0]}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{dialogContent}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default GoodsSharing;
