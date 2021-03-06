// @flow
import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Paper } from '@material-ui/core';
import { styled } from '@material-ui/styles';

import { Org } from '../types/org';
import OrgList from './Org/OrgList';
import OrgNew from './Org/OrgNew';
import SearchBar from './SearchBar';

const OrgPaper = styled(Paper)({
  padding: '20px',
  marginTop: '64px',
  marginLeft: '10px',
  marginRight: '10px',
  minHeight: '450px',
  minWidth: '450px'
});

type Props = {
  list: () => void,
  search: () => void,
  query: string,
  orgs: Org[]
};

export default class OrgHome extends Component<Props> {
  props: Props;

  componentDidMount() {
    const { list } = this.props;
    list();
  }

  render() {
    const { orgs, query, search, list } = this.props;
    // const classes = styles();
    let orgList;
    if (orgs.length > 0) {
      orgList = <OrgList orgs={orgs} query={query} />;
    } else {
      orgList = (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {' '}
          <CircularProgress />{' '}
        </div>
      );
    }

    return (
      <div>
        <SearchBar query={query} onSearchChange={search} />
        <Grid container spacing={16} justify="center">
          <OrgPaper>
            {orgList}
            <OrgNew onAddOrg={list} />
          </OrgPaper>
        </Grid>
      </div>
    );
  }
}
