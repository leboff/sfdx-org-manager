import React, { Component } from 'react';
import CloudIcon from '@material-ui/icons/Cloud';
import { styled } from '@material-ui/styles';
import { green, deepOrange } from '@material-ui/core/colors';
import { Fab } from '@material-ui/core';

type Props = {
  status: string
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
    const { status } = this.props;
    const StatusFab = status === 'Connected' ? GreenFab : OrangeFab;

    return (
      <StatusFab aria-label="edit" >
        <CloudIcon />
      </StatusFab>
    );
  }
}
