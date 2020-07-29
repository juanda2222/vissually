import React from 'react'

import { ExampleComponent, VButton, ThemeProvider } from 'vissually'
import 'vissually/dist/index.css'

const App = () => {
  return (
    
      <div>
        <ExampleComponent text="Create React Library Example 😄" />
        <VButton>{"hey"}</VButton>
        <p> Themed button: </p>
        <ThemeProvider secundary>
          <VButton>{"themed button"}</VButton>
        </ThemeProvider>
      </div>
  )
}

export default App
