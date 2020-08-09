
import React from "react"

import {
  ExampleComponent,
} from 'vissually'

import ButtonBanner from "../banners/ButtonBanner.js"
import SelectInputBanner from "../banners/SelectInputBanner.js"
import TextInputBanner from "../banners/TextInputBanner.js"
import NumberInputBanner from "../banners/NumberInputBanner.js"
import ChipBanner from "../banners/ChipBanner.js"
import AutoCompleteBanner from "../banners/AutoCompleteBanner.js"


const pages = () => {
  
  return (
    <React.Fragment>
      <ExampleComponent text="Create React Library Example 😄" />
      <ButtonBanner/>
      <TextInputBanner />
      <SelectInputBanner />
      <NumberInputBanner dark />
      <AutoCompleteBanner/>
      <ChipBanner/>
    </React.Fragment>
  );
};


export default pages