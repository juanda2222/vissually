
import React from "react"

import {
  ExampleComponent,
} from 'vissually'


import AutoCompleteBanner from "../banners/AutoCompleteBanner.js"


const pages = () => {
  
  return (
    <React.Fragment>
      <ExampleComponent text="Create React Library Example 😄" />
      <AutoCompleteBanner/>
    </React.Fragment>
  );
};


export default pages