'use client';

import { Container, Typography, Paper, Grid } from '@mui/material';

export default function AccountPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        My Account
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Profile Information
            </Typography>
            {/* Profile information will go here */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Orders
            </Typography>
            {/* Order history will go here */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
} 