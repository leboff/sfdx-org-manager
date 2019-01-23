import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OrgHome from '../components/OrgHome';
import * as OrgActions from '../actions/orgs';

function mapStateToProps(state) {
  return {
    query: state.query,
    orgs: state.orgs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(OrgActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrgHome);
