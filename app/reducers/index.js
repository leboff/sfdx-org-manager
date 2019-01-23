// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import orgs from './orgs';
import query from './query';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    orgs,
    query
  });
}
