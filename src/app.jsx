import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppLayout from './AppLayout/AppLayout';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppLayout />
      </React.Fragment>);
  }
}
