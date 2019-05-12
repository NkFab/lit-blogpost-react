import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './Routes/Routes';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#263238',
      main: '#607d8b',
      light: '#cfd8dc',
      contrastText: '#fff',
    },
    secondary: {
      dark: '#008ba3',
      main: '#00bcd4',
      light: '#62efff',
      contrastText: '#000',
    },
  },
  shadows: ['none'],
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <CssBaseline />
      <Routes />
    </Router>
  </MuiThemeProvider>
);

export default App;
