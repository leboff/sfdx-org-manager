import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';
import AppLayout from './AppLayout/AppLayout';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: indigo,
  },
});
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <AppLayout />
        </MuiThemeProvider>
      </React.Fragment>);
  }
}
