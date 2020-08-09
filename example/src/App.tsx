import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from "./components/navigation/NavBar"
import Components from "./components/pages/Components"
import InstallationPage from "./components/pages/InstallationPage"
import HomePage from "./components/pages/HomePage"
import blue from '@material-ui/core/colors/blue';
import lime from '@material-ui/core/colors/lime';

import 'vissually/dist/index.css'

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
  },
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: lime[700],
    },
  },
});

const App = () => {

  return (
  
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/installation">
            <InstallationPage/>
          </Route>
          <Route path="/Components">
            <Components />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  ) 
}

export default App
