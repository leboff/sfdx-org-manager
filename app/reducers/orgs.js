import { LIST_ORGS } from '../actions/orgs';
import { Action } from './types';

const initialState = {
  nonScratchOrgs: [],
  scratchOrgs: []
};

export default function orgs(state = initialState, action: Action) {
  switch (action.type) {
    case LIST_ORGS:
      return Object.assign({}, action.orgs);
    default:
      return state;
  }
}
