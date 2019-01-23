import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OrgHome from '../components/OrgHome';
import * as OrgActions from '../actions/orgs';

const getVisibleOrgs = (orgs, filter) => {
  console.log(orgs, filter);
  if(orgs && orgs.nonScratchOrgs && filter){
    return orgs.nonScratchOrgs.filter(
      org =>
        (org.alias && org.alias.includes(filter)) ||
        (org.username && org.username.includes(filter))
    )
  }
  return orgs.nonScratchOrgs;
}

function mapStateToProps(state) {
  return {
    query: state.query,
    orgs: getVisibleOrgs(state.orgs, state.query),
  };
}

function mapDispatchToProps(dispatch) {
  return Object.assign({}
    ,bindActionCreators(OrgActions, dispatch));
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrgHome);
