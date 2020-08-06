
import React from 'react'
import {
    VTextInput,
    VThemeProvider,
  } from 'vissually'

const TextInputExample = props => (
    
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h3>Inputs:</h3>
        <p> Default Text Inputs: </p>
        <VTextInput placeholder="apple count:" type="number" name="age" />
        <p> Themed Text Inputs: </p>
        <VThemeProvider secundary>
            <VTextInput placeholder="ID number:" type="number" name="age"/>
        </VThemeProvider>
    </div>
)

export default TextInputExample