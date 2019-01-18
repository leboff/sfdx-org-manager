const sfdx = require('sfdx-node');
const opn = require('opn');


export function listOrgs() {
  return sfdx.org.list();
}

export function authOrg(alias, setDefault) {
  return sfdx.auth.webLogin({
    setalias: alias,
    setdefaultusername: setDefault,
    instanceurl: 'https://test.salesforce.com',
  });
}

export function openOrg(username) {
  sfdx.org.open({
    targetusername: username,
    urlonly: true,
    json: true,
  }).then((result) => {
    opn(result.url);
  });
}
