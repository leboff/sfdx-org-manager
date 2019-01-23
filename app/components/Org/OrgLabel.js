import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import { Chip, ListItemText, Typography } from '@material-ui/core';

type Props = {
  alias: string,
  username: string,
  isDefaultUsername: boolean
};

const DefaultChip = styled(Chip)({
  margin: '0 8px',
  height: '24px'
});

export default class OrgStatusAvatar extends Component<Props> {
  props: Props;

  render() {
    const { alias, username, isDefaultUsername } = this.props;
    let defaultChip = '';

    if (isDefaultUsername) {
      defaultChip = <DefaultChip label="default" />;
    }

    return (
      <ListItemText
        primary={
          <React.Fragment>
            <Typography
              component="span"
              variant="subtitle1"
              color="textPrimary"
            >
              {alias}
              {defaultChip}
            </Typography>
          </React.Fragment>
        }
        secondary={username}
      />
    );
  }
}
