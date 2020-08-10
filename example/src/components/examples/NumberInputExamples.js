
import React from 'react'
import {
    VInput,
    VThemeProvider,
  } from 'vissually'

const TextInputExample = props => (
    
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h3>Inputs:</h3>
        <p> Default Text Inputs: </p>
        <VInput placeholder="apple count:" type="number" name="age" onChange={(e)=>{console.log("Default number: ", e.target.value)}}/>
        <p> Themed Text Inputs: </p>
        <VThemeProvider secundary>
            <VInput placeholder="ID number:" type="number" name="age" onChange={(e)=>{console.log("Themed number: ", e.target.value)}}/>
        </VThemeProvider>
    </div>
)

export default TextInputExample