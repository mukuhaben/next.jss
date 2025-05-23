'use client';

import { Container, Typography, Paper } from '@mui/material';

export default function CartPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Shopping Cart
      </Typography>
      <Paper sx={{ p: 2 }}>
        {/* Cart items will go here */}
        <Typography>Your cart is empty</Typography>
      </Paper>
    </Container>
  );
} 