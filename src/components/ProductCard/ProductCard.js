import React from "react";
import {
  Card,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
} from "@material-ui/core";

import ProductCounter from "../ProductCounter/ProductCounter";
import RemoveDialog from "../RemoveDialog/RemoveDialog";

import "./ProductCardStyle.scss";

export default function ProductCard() {
  return (
    <Card className="productCard">
      <ListItem alignItems="flex-start">
        <Box display="flex">
          <ListItemAvatar>
            <Avatar alt="Sogo" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText>
            <Typography variant="h5">
              SOGO 360 Degree Dual Roatatable Car Electric Fans
            </Typography>
            <Typography variant="h6">PKR 1400</Typography>
            <Typography variant="caption">Shipping: PKR 100</Typography>
          </ListItemText>
        </Box>

        <Box className="counter">
          {/* <Button variant="text">Remove</Button> */}
          <RemoveDialog />

          <ProductCounter />
        </Box>
      </ListItem>
    </Card>
  );
}
