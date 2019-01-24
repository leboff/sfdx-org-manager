import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import OrgListItem from './OrgListItem';
import { Org } from '../../types/org';
type Props = {
  orgs: Org[]
};

export default class OrgList extends Component<Props> {
  render() {
    const { orgs } = this.props;

    const orgItems = orgs.map(org => <OrgListItem key={org.orgId} org={org} />);
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={32}>
            <List>{orgItems}</List>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
