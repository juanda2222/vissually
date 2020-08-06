
import React from 'react'
import {
    VTextInput,
    VThemeProvider,
  } from 'vissually'

const TextInputExample = props => (
    
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h3>Inputs:</h3>
        <p> Default Text Inputs: </p>
        <VTextInput placeholder="Placeholder!" name="name" onChange={(e)=>{console.log("default string: ",e.target.value)}}/>
        <p> Themed Text Inputs: </p>
        <VThemeProvider secundary>
            <VTextInput placeholder="Placeholder!" name="name" onChange={(e)=>{console.log("Themed string: ",e.target.value)}}/>
        </VThemeProvider>
    </div>
)

export default TextInputExample