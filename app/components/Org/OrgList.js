import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import OrgListItem from './OrgListItem';
import OrgEditDialog from './OrgEditDialog';
import { Org } from '../../types/org';

type Props = {
  orgs: Org[]
};

class OrgList extends Component<Props> {
  props: Props;

  render() {
    const { orgs } = this.props;

    const orgItems = orgs.map(org => (
      <OrgListItem onClick={this.onClickHandler} key={org.orgId} org={org} />
    ));
    return (
      <Grid container spacing={24}>
        <OrgEditDialog />
        <Grid item xs={12}>
          <Grid container justify="center" spacing={32}>
            <List>{orgItems}</List>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default OrgList;
