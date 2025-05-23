'use client';

import { Container, Typography, Grid } from '@mui/material';

export default function ProductsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={3}>
        {/* Product grid will go here */}
      </Grid>
    </Container>
  );
} 