import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import './ProductCounterStyle.scss';

export default function ProductCounter() {
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  };
  const DecNum = () => {
    if (count > 0) setCount(count - 1);
    else {
      setCount(0);
    }
  };

  return (
    <Box className="productCounter">
      <IconButton onClick={DecNum}>
        <RemoveIcon />
      </IconButton>

      <Typography variant="caption">{count}</Typography>

      <IconButton onClick={IncNum}>
        <AddIcon />
      </IconButton>
    </Box>
  );
}
