import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import OrgPage from './containers/OrgPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.HOME} component={OrgPage} />
    </Switch>
  </App>
);
