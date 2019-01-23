import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { install } from '@material-ui/styles';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import orgUpdateSubscriber from './store/subscribers/orgUpdateSubscriber';
import './app.global.css';

const store = configureStore();

store.subscribe(orgUpdateSubscriber(store));

install();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
