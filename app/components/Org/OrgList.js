import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Org from './Org';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 180,
    width: 180
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  orgGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  }
});
type Props = {
  orgs: any,
  classes: any
};

class OrgList extends Component<Props> {
  render() {
    const { classes, orgs } = this.props;

    const orgItems = orgs.map(org => <Org key={org.orgId} org={org} />);
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            justify="center"
            spacing={32}
          >
            <List>{orgItems}</List>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(OrgList);
