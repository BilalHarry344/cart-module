import React from "react";
import {
  Grid,
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import "./RemoveDialogStyle.scss";

export default function RemoveDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid className="deleteDialog">
      <Button variant="text" onClick={handleClickOpen}>
        Remove
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="deleteDialogStyle"
      >
        <DialogTitle>Confirmation Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            className="deleteButton"
            varaint="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
