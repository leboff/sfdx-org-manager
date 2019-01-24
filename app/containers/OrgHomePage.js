import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OrgHome from '../components/OrgHome';
import * as OrgActions from '../actions/orgs';

const orgFilter = filter => org =>
  (org.alias && org.alias.includes(filter)) ||
  (org.username && org.username.includes(filter));

const getVisibleOrgs = (orgs, filter) => {
  let filteredOrgs = [];
  filteredOrgs = filteredOrgs.concat(orgs.nonScratchOrgs, orgs.scratchOrgs);
  if (filter) {
    return filteredOrgs.filter(orgFilter(filter));
  }
  return filteredOrgs;
};

function mapStateToProps(state) {
  return {
    query: state.query,
    orgs: getVisibleOrgs(state.orgs, state.query)
  };
}

function mapDispatchToProps(dispatch) {
  return Object.assign({}, bindActionCreators(OrgActions, dispatch));
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrgHome);
