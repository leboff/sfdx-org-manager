import { SEARCH_ORGS } from '../actions/orgs';
import { Action } from './types';

export default function query(state = '', action: Action) {
  switch (action.type) {
    case SEARCH_ORGS:
      return action.query;
    default:
      return state;
  }
}
