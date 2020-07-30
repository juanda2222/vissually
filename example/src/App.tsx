import React from 'react'

import {
  ExampleComponent,
  VButton,
  VTextInput,
  ThemeProvider,
} from 'vissually'
import 'vissually/dist/index.css'

const App = () => {
  return (
    
    <div>
      <ExampleComponent text="Create React Library Example 😄" />
      <div style={{display:"flex", flexDirection:"column",  alignItems:"center", }}>
        <h3>Buttons:</h3>
        <p> Default Button: </p>
        <VButton>{"hey"}</VButton>
        <p> Themed Button: </p>
        <ThemeProvider secundary>
          <VButton>{"themed button"}</VButton>
        </ThemeProvider>
      </div>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h3>Inputs:</h3>
        <p> Default Text Inputs: </p>
        <VTextInput/>
        <p> Themed Text Inputs: </p>
        <ThemeProvider secundary>
          <VTextInput/>
        </ThemeProvider>
      </div>
        
    </div>
  )
}

export default App
