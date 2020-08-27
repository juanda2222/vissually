import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

import NavBar from "./components/navigation/NavBar"
import HomePage from "./components/pages/HomePage"
import ButtonPage from "./components/pages/ButtonPage"
import InputPage from "./components/pages/InputPage"
import SelectPage from "./components/pages/SelectPage"
import AutocompletePage from "./components/pages/AutocompletePage"
import Usage from "./components/pages/UsagePage"
import Installation from "./components/pages/InstallationPage"
import StylesPage from "./components/pages/StylesPage"

import { connect } from 'react-redux'

import 'vissually/dist/index.css'


interface AppProps {
  palette_type: "light" | "dark",
  is_dark:boolean
}



function App (props: AppProps) {

  const { palette_type, is_dark } = props

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
        main: green[700],
      },
      type: palette_type
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path='/get-started/installation' component={()=> <Installation dark={is_dark}/>} />
          <Route path='/get-started/usage' component={()=> <Usage dark={is_dark}/>} />
        
          <Route path='/components/button' component={()=> <ButtonPage dark={is_dark}/>} />
          <Route path='/components/input' component={()=> <InputPage dark={is_dark}/>} />
          <Route path='/components/select' component={()=> <SelectPage dark={is_dark}/>} />
          <Route path='/components/autocomplete' component={()=> <AutocompletePage dark={is_dark}/>} />

          <Route path='/styles/themes' component={()=> <StylesPage dark={is_dark}/>} />
        </Switch>
      </Router>
    </ThemeProvider>
  ) 
}
const mapStateToProps = (state:ThemeStateType /*, ownProps*/) => {
  return {
    palette_type: state.palette_type,
    is_dark: state.is_dark,
  }
}

export default connect(
  mapStateToProps,
  {}
)(App)
