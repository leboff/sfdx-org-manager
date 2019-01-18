import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';
import OrgList from '../Org/OrgList';
import OrgNew from '../Org/OrgNew';
import { listOrgs } from '../Org/OrgService';

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
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      orgs: {},
    };
    
    this.refreshOrgList();
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleAddOrg = this.handleAddOrg.bind(this);
  }

  handleSearchChange(search) {
    this.setState({
      search,
    });
  }

  refreshOrgList() {
    listOrgs().then(orgs => this.setState({ orgs }));
  }

  handleAddOrg() {
    this.refreshOrgList();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar search={this.state.search} onSearchChange={this.handleSearchChange} />
        <main>
          <div className={classNames(classes.layout, classes.orgGrid)}>
            <OrgList search={this.state.search} orgs={this.state.orgs} />
            <OrgNew onAddOrg={this.handleAddOrg} />
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
