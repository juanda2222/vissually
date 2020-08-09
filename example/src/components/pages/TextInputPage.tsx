
import React from "react"

import {
  ExampleComponent,
} from 'vissually'

import TextInputBanner from "../banners/TextInputBanner.js"
import NumberInputBanner from "../banners/NumberInputBanner.js"


const pages = () => {
  
  return (
    <React.Fragment>
      <ExampleComponent text="Create React Library Example 😄" />
      <TextInputBanner />
      <NumberInputBanner dark />
    </React.Fragment>
  );
};


export default pages