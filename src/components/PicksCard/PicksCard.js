import React from 'react';
import { Card, Box, Typography, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Product_Img from '../../assets/img/product.jpg';

import './PicksCardStyle.scss';

export default function PicksCard() {
  return (
    <Card className="picksCard">
      <Box className="productImage">
        <img src={Product_Img} alt="product" />
      </Box>

      <Typography variant="h6">Posh Pile 5TH Avenue Universel Floor Mats</Typography>

      <Box display="flex" justifyContent="space-between" alignItems="flex-end">
        <Box>
          <Typography variant="h5">PKR 1,290</Typography>
          <Typography variant="caption">Free Shipping</Typography>
        </Box>

        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
      </Box>
    </Card>
  );
}
