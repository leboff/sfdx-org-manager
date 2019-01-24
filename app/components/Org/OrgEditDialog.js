import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Backdrop,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  FormGroup,
  Fab,
  Grid,
  FormControlLabel,
  Button,
  DialogActions,
  CircularProgress,
  Switch
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import Org from '../../types/org';
import * as OrgActions from '../../actions/orgs';

type Props = {
  editMode: boolean,
  editModeOrg: Org,
  cancelEdit: () => void
};
class OrgEditDialog extends Component<Props> {
  props: Props;

  render() {
    const { editMode, editModeOrg, cancelEdit } = this.props;
    return (
      <div>
        <Backdrop open={editMode} />
        <Dialog open={false}>
          <DialogTitle id="form-dialog-title">Updating</DialogTitle>
          <DialogContent>
            <CircularProgress />
          </DialogContent>
        </Dialog>
        <Dialog open={editMode} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            <Grid
              justify="space-between" // Add it here :)
              container
              alignItems="flex-end"
              spacing={24}
            >
              <Grid item>Org Edit</Grid>

              <Grid item>
                <div>
                  <Fab aria-label="Delete">
                    <Delete />
                  </Fab>
                </div>
              </Grid>
            </Grid>
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="alias"
              label="Alias"
              defaultValue={editModeOrg.alias}
              // onChange={this.handleChange}
              type="text"
              fullWidth
            />
            <TextField
              disabled
              id="standard-disabled"
              label="Username"
              defaultValue={editModeOrg.username}
              margin="normal"
              fullWidth
            />
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={editModeOrg.isDefaultUsername}
                    value={editModeOrg.isDefaultUsername}
                  />
                }
                label="Set as Default Username"
              />
            </FormGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={cancelEdit} color="primary">
              Cancel
            </Button>
            <Button
              // onClick={this.props.open = false}
              color="primary"
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    editModeOrg: state.ui.editModeOrg,
    editMode: state.ui.editMode
  };
}

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators(OrgActions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrgEditDialog);
