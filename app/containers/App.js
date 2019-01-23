// @flow
import * as React from 'react';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, indigo } from '@material-ui/core/colors';

type Props = {
  children: React.Node
};

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: indigo
  },
  typography: {
    useNextVariants: true
  }
});

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}
