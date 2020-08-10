import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import lime from '@material-ui/core/colors/lime';

import NavBar from "./components/navigation/NavBar"
import HomePage from "./components/pages/HomePage"
import ButtonPage from "./components/pages/ButtonPage"
import InputPage from "./components/pages/TextInputPage"
import SelectPage from "./components/pages/SelectPage"
import AutocompletePage from "./components/pages/AutocompletePage"
import Usage from "./components/pages/Usage"
import Installation from "./components/pages/InstallationPage"
import StylesBasicPage from "./components/pages/StylesBasicPage"
import StylesThemePage from "./components/pages/StylesThemePage"

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
          <Route path='/get-started/installation' component={Installation} />
          <Route path='/get-started/usage' component={Usage} />
        
          <Route path='/components/button' component={ButtonPage} />
          <Route path='/components/input' component={InputPage} />
          <Route path='/components/select' component={SelectPage} />
          <Route path='/components/autocomplete' component={AutocompletePage} />

          <Route path='/styles/basic' component={StylesBasicPage} />
          <Route path='/styles/themes' component={StylesThemePage} />
        </Switch>
      </Router>
    </ThemeProvider>
  ) 
}

export default App
