import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';
import OrgList from '../Org/OrgList';
import OrgNew from '../Org/OrgNew';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 180,
    width: 180,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  orgGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
});

class AppLayout extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar />
        <main>
          <div className={classNames(classes.layout, classes.orgGrid)}>
            <OrgList />
            <OrgNew />
          </div>
        </main>
      </div>
    );
  }
}

AppLayout.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(AppLayout);
