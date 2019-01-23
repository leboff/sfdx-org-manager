// @flow
import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Paper } from '@material-ui/core';
import { styled } from '@material-ui/styles';

import OrgList from './Org/OrgList';
import OrgNew from './Org/OrgNew';
import SearchBar from './SearchBar';

const OrgPaper = styled(Paper)({
  padding: '20px',
  marginTop: '64px',
  marginLeft: '10px',
  marginRight: '10px'
});

type Props = {
  list: () => void,
  search: () => void,
  query: string,
  orgs: any
};

export default class OrgHome extends Component<Props> {
  props: Props;

  constructor(props: Props) {
    super(props);

    this.handleAddOrg.bind(this);
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    const { list } = this.props;
    list();
  }

  handleAddOrg() {
    this.refreshList();
  }

  render() {
    const { orgs, query, search } = this.props;
    // const classes = styles();
    let orgList;
    if (orgs.nonScratchOrgs) {
      orgList = <OrgList orgs={orgs} query={query} />;
    } else {
      orgList = <CircularProgress />;
    }

    return (
      <div>
        <SearchBar query={query} onSearchChange={search} />
        <Grid container spacing={16} justify="center">
          <OrgPaper>
            {orgList}
            <OrgNew onAddOrg={this.handleAddOrg} />
          </OrgPaper>
        </Grid>
      </div>
    );
  }
}
