import React, { Component } from 'react';
import CloudIcon from '@material-ui/icons/Cloud';
import { styled } from '@material-ui/styles';
import { green, deepOrange } from '@material-ui/core/colors';
import { Tooltip, Avatar, ListItemAvatar } from '@material-ui/core';

type Props = {
  status: string
};

const BaseAvatar = {
  margin: 4,
  color: '#fff'
};

const GreenAvatar = styled(Avatar)(
  Object.assign(
    {
      backgroundColor: green[500]
    },
    BaseAvatar
  )
);

const OrangeAvatar = styled(Avatar)(
  Object.assign(
    {
      backgroundColor: deepOrange[500]
    },
    BaseAvatar
  )
);

export default class OrgStatusAvatar extends Component<Props> {
  props: Props;

  render() {
    const { status } = this.props;
    const StatusAvatar = status === 'Connected' ? GreenAvatar : OrangeAvatar;

    return (
      <ListItemAvatar>
        <Tooltip title={status} placement="right">
          <StatusAvatar>
            <CloudIcon />
          </StatusAvatar>
        </Tooltip>
      </ListItemAvatar>
    );
  }
}
