import React from 'react';
import { Box, Typography, Paper, Divider, InputBase, Button } from '@material-ui/core';

import './DiscountCodeStyle.scss';

export default function DiscountCode() {
  return (
    <Box mt={7} className="subTotalShipping">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="body1">Subtotal (3 items)</Typography>
        <Typography variant="body1">PKR 2,300</Typography>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="space-between" mt={1}>
        <Typography variant="body1">Shipping Charges</Typography>
        <Typography variant="body1">200</Typography>
      </Box>

      <Paper component="form" className="discountField">
        <InputBase placeholder="Enter Discount Code" type="text" />

        <Divider className="divider" orientation="vertical" />
        <Button variant="contained">Apply</Button>
      </Paper>
    </Box>
  );
}
