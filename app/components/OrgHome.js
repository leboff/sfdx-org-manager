// @flow
import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Paper , Button, Backdrop} from '@material-ui/core';
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
  orgs: any,
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
    if (orgs) {
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
            <OrgNew onAddOrg={list} />
          </OrgPaper>
        </Grid>
      </div>
    );
  }
}
