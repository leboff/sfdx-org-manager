import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import CloudIcon from '@material-ui/icons/Cloud';
import green from '@material-ui/core/colors/green';
import deepOrange from '@material-ui/core/colors/deepOrange';
import { Tooltip, Typography } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import { openOrg } from './OrgService';

const styles = ({
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  tooltipPlacementBottom: {
    margin: '2px 0',
  },
  chip: {
    margin: '0 8px',
  },
});

class Org extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.open = this.open.bind(this);
  }

  open() {
    openOrg(this.props.org.username);
  }
  isConnected() {
    if (this.props.org.connectedStatus === 'Connected') {
      return 'greenAvatar';
    }
    return 'orangeAvatar';
  }
  render() {
    const { classes, org } = this.props;
    return (
      <ListItem>
        <ListItemAvatar>
          <Tooltip title={org.connectedStatus} placement="right">
            <Avatar className={classes[this.isConnected()]}>
              <CloudIcon />
            </Avatar>
          </Tooltip>
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography component="span" variant="subtitle1" color="textPrimary">
                {org.alias}
                {org.isDefaultUsername ? (
                  <Chip className={classes.chip} label="default" />
                ) : ''}
              </Typography>
            </React.Fragment>
          }
          secondary={org.username}
        />
        <ListItemSecondaryAction>
          { org.connectedStatus === 'Connected' &&
            (<IconButton aria-label="Open" onClick={this.open}>
              <OpenInBrowserIcon />
            </IconButton>)
          }
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

Org.propTypes = {
  classes: PropTypes.object.isRequired,  // eslint-disable-line react/forbid-prop-types
  org: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Org);
