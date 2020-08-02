import React from 'react'

import {
  ExampleComponent,
  VButton,
  VTextInput,
  VThemeProvider,
  VClickableList,
  VSelect,
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
        <VThemeProvider secundary>
          <VButton>{"themed button"}</VButton>
        </VThemeProvider>
      </div>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h3>Inputs:</h3>
        <p> Default Text Inputs: </p>
        <VTextInput/>
        <p> Themed Text Inputs: </p>
        <VThemeProvider secundary>
          <VTextInput/>
        </VThemeProvider>
      </div>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h3>Select item:</h3>
        <p> Default select: </p>
        <VSelect label="select me" list={["item 1", "item 2", "item 3", "another one", "addition"]}/>
        <p> Themed Default lists: </p>
        <VThemeProvider secundary>
          <VSelect label="select me" list={["item 1", "item 2", "item 3", "another one", "addition"]}/>
        </VThemeProvider>
      </div>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h3>Lists:</h3>
        <p> Default lists: </p>
        <VClickableList list={["item 1", "item 2", "item 3", "another one", "addition"]}/>
        <p> Themed Default lists: </p>
        <VThemeProvider secundary>
          <VClickableList list={["item 1", "item 2", "item 3", "another one", "addition"]}/>
        </VThemeProvider>
      </div>
      
    </div>
  )
}

export default App
