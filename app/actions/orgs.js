import type { Dispatch } from '../reducers/types';

const opn = require('opn');
const sfdx = require('sfdx-node');

export const LIST_ORGS = 'LIST_ORGS';
export const SEARCH_ORGS = 'SEARCH_ORGS';

export function listOrgs(orgs) {
  return {
    type: LIST_ORGS,
    orgs
  };
}

export function list() {
  return (dispatch: Dispatch) =>
    sfdx.org.list().then(orgs => dispatch(listOrgs(orgs)));
}

export function auth(alias, setDefault) {
  return sfdx.auth.webLogin({
    setalias: alias,
    setdefaultusername: setDefault,
    instanceurl: 'https://test.salesforce.com'
  });
}

export function open(username) {
  return sfdx.org
    .open({
      targetusername: username,
      urlonly: true,
      json: true
    })
    .then(result => opn(result.url));
}

export function search(query) {
  return {
    type: SEARCH_ORGS,
    query: query.target.value
  };
}
