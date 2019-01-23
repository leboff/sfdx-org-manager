import { LIST_ORGS } from '../actions/orgs';
import { Action } from './types';

export default function orgs(state = {}, action: Action) {
  switch (action.type) {
    case LIST_ORGS:
      return Object.assign({}, action.orgs);
    default:
      return state;
  }
}
