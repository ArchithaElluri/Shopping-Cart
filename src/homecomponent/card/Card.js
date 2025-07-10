import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const ShoppingCard = ({ image, title, description, price, onAddToCart, onBuyNow }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100"
        objectFit="fill"
        image={image}
        alt={title}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
          {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
        </Typography>
        <Typography variant="h6" component="div" sx={{ marginTop: 1 }}>
          ${price}
        </Typography>
      </CardContent>

      {/* Card Actions: Buttons */}
      {/* <CardActions>
        <Button size="small" variant="contained" onClick={onAddToCart}>
          Add to Cart
        </Button>
        <Button size="small" variant="outlined" onClick={onBuyNow}>
          Buy Now
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default ShoppingCard;
