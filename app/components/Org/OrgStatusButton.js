import React, { Component } from 'react';
import { Cloud, AccessTime } from '@material-ui/icons';
import { styled } from '@material-ui/styles';
import { green, deepOrange } from '@material-ui/core/colors';
import { Fab } from '@material-ui/core';

type Props = {
  onClick: () => void,
  status: string,
  devHubOrgId: string
};

const BaseFab = {
  margin: 4,
  color: '#fff'
};

const GreenFab = styled(Fab)(
  Object.assign(
    {
      backgroundColor: green[500]
    },
    BaseFab
  )
);

const OrangeFab = styled(Fab)(
  Object.assign(
    {
      backgroundColor: deepOrange[500]
    },
    BaseFab
  )
);

export default class OrgStatusButton extends Component<Props> {
  props: Props;

  render() {
    const { status, devHubOrgId, onClick } = this.props;
    const StatusFab = status === 'Connected' ? GreenFab : OrangeFab;
    const OrgIcon = devHubOrgId ? <AccessTime /> : <Cloud />;
    return (
      <StatusFab onClick={onClick} aria-label="edit">
        {OrgIcon}
      </StatusFab>
    );
  }
}
