import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import OrgStatusButton from './OrgStatusButton';
import OrgOpenButton from './OrgOpenButton';
import OrgLabel from './OrgLabel';
import { Org } from '../../types/org';
type Props = {
  org: Org
};
export default class OrgListItem extends Component<Props> {
  props: Props;

  render() {
    const { org } = this.props;
    return (
      <ListItem>
        <OrgStatusButton
          status={org.connectedStatus}
          devHubOrgId={org.devHubOrgId}
        />
        <OrgLabel
          alias={org.alias}
          username={org.username}
          isDefaultUsername={org.isDefaultUsername}
        />
        <OrgOpenButton status={org.connectedStatus} username={org.username} />
      </ListItem>
    );
  }
}
