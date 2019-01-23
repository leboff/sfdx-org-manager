import React, { Component } from 'react';
import { IconButton, ListItemSecondaryAction } from '@material-ui/core';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import { open } from '../../actions/orgs';

type Props = {
  status: string,
  username: string
};

export default class OrgOpenButton extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.open = this.open.bind(this);
  }

  open() {
    const { username } = this.props;
    open(username);
  }

  render() {
    const { status } = this.props;

    return (
      <ListItemSecondaryAction>
        {status === 'Connected' && (
          <IconButton aria-label="Open" onClick={this.open}>
            <OpenInBrowserIcon />
          </IconButton>
        )}
      </ListItemSecondaryAction>
    );
  }
}
