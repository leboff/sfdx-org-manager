import React from 'react';
import PropTypes from 'prop-types';
import { Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const styles = ({
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
});

class OrgNew extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Fab className={classes.fab} color="secondary">
        <AddIcon />
      </Fab>
    );
  }
}

OrgNew.propTypes = {
  classes: PropTypes.object.isRequired,  // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(OrgNew);
