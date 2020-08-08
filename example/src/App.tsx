import React from 'react'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import {
  ExampleComponent,
} from 'vissually'

import ButtonBanner from "./components/banners/ButtonBanner.js"
import SelectInputBanner from "./components/banners/SelectInputBanner.js"
import TextInputBanner from "./components/banners/TextInputBanner.js"
import NumberInputBanner from "./components/banners/NumberInputBanner.js"
import ChipBanner from "./components/banners/ChipBanner.js"
import AutoCompleteBanner from "./components/banners/AutoCompleteBanner.js"
import NavBar from "./components/navigation/NavBar"

import 'vissually/dist/index.css'

let theme = createMuiTheme();

const App = () => {

  return (
    
    <div>
      <ThemeProvider theme={theme}>
        <NavBar/>
        <ExampleComponent text="Create React Library Example 😄" />
        <ButtonBanner/>
        <TextInputBanner />
        <SelectInputBanner />
        <NumberInputBanner dark />
        <AutoCompleteBanner/>
        <ChipBanner/>
      </ThemeProvider>
    </div>
  ) 
}

export default App
