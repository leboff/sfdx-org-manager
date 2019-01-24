import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  Fab,
  CircularProgress,
  FormGroup,
  FormControlLabel
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Switch from '@material-ui/core/Switch';
import { auth } from '../../actions/orgs';

const styles = {
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
  }
};

class OrgNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      backdrop: false,
      setDefault: false,
      alias: ''
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
  }

  handleAuth() {
    const { alias, setDefault } = this.state;
    const { onAddOrg } = this.props;
    this.setState({ open: false });
    this.setState({ backdrop: true });
    return auth(alias, setDefault).then(() => {
      onAddOrg();
      return this.handleClose();
    });
  }

  handleChange(event) {
    this.setState({ alias: event.target.value });
  }

  handleSwitch() {
    const { setDefault } = this.state;
    this.setState({ setDefault: !setDefault });
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ backdrop: false });
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;
    const { backdrop, open, value, setDefault } = this.state;
    return (
      <div>
        <Backdrop open={backdrop} />
        <Fab
          className={classes.fab}
          color="secondary"
          onClick={this.handleClickOpen}
        >
          <AddIcon />
        </Fab>
        <Dialog open={backdrop}>
          <DialogTitle id="form-dialog-title">Authenticating</DialogTitle>
          <DialogContent>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress />
            </div>
          </DialogContent>
        </Dialog>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Connect a New Org</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Authenticate a new Salesforce Org to add it to your org list.
              Enter an optional alias below.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="alias"
              label="Alias"
              value={value}
              onChange={this.handleChange}
              type="text"
              fullWidth
            />
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={setDefault}
                    onChange={this.handleSwitch}
                    value={setDefault}
                  />
                }
                label="Set as Default Username"
              />
            </FormGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleAuth} color="primary">
              Authenticate
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

OrgNew.defaultProps = {
  onAddOrg: () => {}
};

OrgNew.propTypes = {
  onAddOrg: PropTypes.func, // eslint-disable-line react/forbid-prop-types
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(OrgNew);
