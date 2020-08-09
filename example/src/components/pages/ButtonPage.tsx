
import React from "react"

import {
  ExampleComponent,
} from 'vissually'

import ButtonBanner from "../banners/ButtonBanner.js"


const pages = () => {
  
  return (
    <React.Fragment>
      <ExampleComponent text="Create React Library Example 😄" />
      <ButtonBanner/>
    </React.Fragment>
  );
};


export default pages