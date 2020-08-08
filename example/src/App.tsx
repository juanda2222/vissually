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

import 'vissually/dist/index.css'

let theme = createMuiTheme();

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
