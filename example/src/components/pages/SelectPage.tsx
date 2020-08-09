
import React from "react"

import {
  ExampleComponent,
} from 'vissually'

import SelectInputBanner from "../banners/SelectInputBanner.js"


const pages = () => {
  
  return (
    <React.Fragment>
      <ExampleComponent text="Create React Library Example 😄" />
      <SelectInputBanner />
    </React.Fragment>
  );
};


export default pages