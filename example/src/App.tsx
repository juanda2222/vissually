import React from 'react'

import {
  ExampleComponent,
} from 'vissually'

import ButtonBanner from "./components/banners/ButtonBanner"
import SelectInputBanner from "./components/banners/SelectInputBanner"
import TextInputBanner from "./components/banners/TextInputBanner"
import NumberInputBanner from "./components/banners/NumberInputBanner"
import ChipBanner from "./components/banners/ChipBanner"

import 'vissually/dist/index.css'

const App = () => {
  return (
    
    <div>
      <ExampleComponent text="Create React Library Example 😄" />
      <ButtonBanner/>
      <TextInputBanner />
      <SelectInputBanner />
      <NumberInputBanner dark />
      <ChipBanner/>
    </div>
  ) 
}

export default App
