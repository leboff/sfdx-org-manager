import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import OrgStatusButton from './OrgStatusButton';
import OrgOpenButton from './OrgOpenButton';
import OrgLabel from './OrgLabel';
import { Org } from '../../types/org';
import * as OrgActions from '../../actions/orgs';

type Props = {
  org: Org,
  editOrg: () => void
};
class OrgListItem extends Component<Props> {
  props: Props;

  editOrg = () => {
    const { editOrg, org } = this.props;
    editOrg(org);
  };

  render() {
    const { org } = this.props;
    return (
      <ListItem>
        <OrgStatusButton
          status={org.connectedStatus}
          devHubOrgId={org.devHubOrgId}
          onClick={this.editOrg}
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

function mapDispatchToProps(dispatch) {
  return Object.assign({}, bindActionCreators(OrgActions, dispatch));
}

export default connect(
  null,
  mapDispatchToProps
)(OrgListItem);
