import type { Dispatch } from '../reducers/types';

const opn = require('opn');
const sfdx = require('sfdx-node');

export const LIST_ORGS = 'LIST_ORGS';
export const EDIT_ORG = 'EDIT_ORG';
export const CANCEL_EDIT = 'CANCEL_EDIT';
export const SEARCH_ORGS = 'SEARCH_ORGS';

export function listOrgs(orgs) {
  return {
    type: LIST_ORGS,
    orgs
  };
}

export function editOrg(editModeOrg) {
  return {
    type: EDIT_ORG,
    editModeOrg
  };
}

export function cancelEdit() {
  return {
    type: CANCEL_EDIT
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
