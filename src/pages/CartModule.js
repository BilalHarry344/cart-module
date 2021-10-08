import React from 'react';
import { Grid, Typography, Box, Container, Divider, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import ProductCard from '../components/ProductCard/ProductCard';
import DiscountCode from '../components/DiscountCode/DiscountCode';
import PicksCard from '../components/PicksCard/PicksCard';

import './CartModuleStyle.scss';

export default function CartModule() {
  return (
    <Grid>
      <Box className="cartHeader">
        <ArrowBackIosIcon />
        <Typography variant="h5">Cart (3)</Typography>
      </Box>

      <Container maxWidth={false} className="productMainWrapper">
        <Grid container>
          <Grid item lg={8} md={7} sm={12} xs={12}></Grid>

          <Grid item lg={4} md={5} sm={12} xs={12}>
            <ProductCard />

            <ProductCard />

            <DiscountCode />

            <Divider className="sectionDivider" />

            <Grid className="topPicks">
              <Typography variant="h3">Top Picks For You</Typography>

              <Grid container spacing={2}>
                <Grid item md={6} sm={6} xs={6} className="picksCardMobile">
                  <PicksCard />
                </Grid>

                <Grid item md={6} sm={6} xs={6} className="picksCardMobile">
                  <PicksCard />
                </Grid>

                <Grid item md={6} sm={6} xs={6} className="picksCardMobile">
                  <PicksCard />
                </Grid>

                <Grid item md={6} sm={6} xs={6} className="picksCardMobile">
                  <PicksCard />
                </Grid>
              </Grid>
            </Grid>

            <Grid className="checkout">
              <Typography variant="h6">
                Total: <span>PKR 1400</span>
              </Typography>

              <Button variant="contained">Checkout</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
