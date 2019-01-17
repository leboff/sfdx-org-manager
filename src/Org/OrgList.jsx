import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Org from './Org';
import * as sfdx from 'sfdx-node';

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

class OrgList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orgs: {},
    };
  }

  componentDidMount() {
    this.getOrgs();
  }

  getOrgs() {
    sfdx.org.list()
    .then((orgs) => {
      console.log(orgs);
      this.setState({
        orgs,
      });
    });
  }


  render() {
    const { classes } = this.props;
    if (!this.state.orgs.nonScratchOrgs) {
      return <div>Loading...</div>;
    }
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={32}>
            {this.state.orgs.nonScratchOrgs.map(value => (
              <Org key={value.orgId} org={value} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

OrgList.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(OrgList);
