'use client';

import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';

interface Category {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ProductCategoriesProps {
  header: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: 'Art Supplies',
    description: 'High-quality art supplies for every medium',
    image: '/images/art-supplies.jpg',
  },
  {
    id: 2,
    title: 'Craft Tools',
    description: 'Essential tools for crafting projects',
    image: '/images/craft-tools.jpg',
  },
  {
    id: 3,
    title: 'Paper & Canvas',
    description: 'Premium papers and canvas for artists',
    image: '/images/paper-canvas.jpg',
  },
];

export default function ProductCategories({ header }: ProductCategoriesProps) {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography
        component="h2"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {header}
      </Typography>
      <Grid container spacing={4}>
        {categories.map((category) => (
          <Grid item key={category.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  pt: '56.25%',
                }}
                image={category.image}
                alt={category.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {category.title}
                </Typography>
                <Typography>
                  {category.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
} 