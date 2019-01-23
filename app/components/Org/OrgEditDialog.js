import React, { Component } from 'react';
import { Backdrop, Dialog, DialogContent, DialogContentText, DialogTitle, TextField, FormGroup, FormControlLabel, Typography, Button, DialogActions, CircularProgress } from '@material-ui/core';

type Props = {
  org: any,
  isOpen: boolean,
  isUpdating: boolean
};

export default class OrgEdit extends Component<Props> {
  props: Props;

  render() {
    const { org, isOpen, isUpdating } = this.props;
    return (
     <div>
      <Backdrop open={isOpen} />
      <Dialog open={isUpdating}>
        <DialogTitle id="form-dialog-title">Updating</DialogTitle>
        <DialogContent>
          <CircularProgress />
        </DialogContent>
      </Dialog>
      <Dialog
        open={isOpen}
        // onClose=
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update an Org</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update Your Salesforce Org
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="alias"
            label="Alias"
            // value={value}
            // onChange={this.handleChange}
            type="text"
            fullWidth
          />
          <FormGroup row>
            <FormControlLabel
              control={
                <Typography>theusername</Typography>
              }
              label="Username"
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button
          // onClick={this.props.isOpen = false}
          color="primary">
            Cancel
          </Button>
          <Button
          // onClick={this.props.isOpen = false}
          color="primary">
            Authenticate
          </Button>
        </DialogActions>
      </Dialog>
     </div>
    );
  }
}
