import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import OrgStatusAvatar from './OrgStatusAvatar';
import OrgOpenButton from './OrgOpenButton';
import OrgLabel from './OrgLabel';

type Props = {
  org: any
};
export default class Org extends Component<Props> {
  props: Props;

  render() {
    const { org } = this.props;
    return (
      <ListItem>
        <OrgStatusAvatar status={org.connectedStatus} />
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
