import React from 'react'

import { ExampleComponent, VButton } from 'vissually'
//import { VButton } from 'vissually/Buttons'
import 'vissually/dist/index.css'

const App = () => {
  return (
    <div>
      <ExampleComponent text="Create React Library Example 😄" />
      <VButton>{"hey"}</VButton>

    </div>
  )
}

export default App
