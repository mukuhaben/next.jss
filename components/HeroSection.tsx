'use client';

import { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Welcome to FirstCraft
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Your one-stop destination for all your crafting needs
        </Typography>
      </Container>
    </Box>
  );
} 