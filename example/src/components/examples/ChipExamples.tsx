
import React from 'react'
import {
    VChip,
    VThemeProvider,
  } from 'vissually'

const TextInputExample = () => (
    
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h3>Inputs:</h3>
        <p> Default Text Inputs: </p>
        <VChip label="label!"/>
        <VChip label="other one" onClick={()=>{console.log("Clicked on 'other one'")}}/>
        <VChip label="delete me" onClick={()=>{console.log("Clicked on 'delete me'")}} onDelete={()=>{console.log("deleting")}}/>
        <p> Themed Text Inputs: </p>
        <VThemeProvider secundary>
        <VChip label="label!"/>
        <VChip label="other one" onClick={()=>{console.log("Clicked on 'other one'")}}/>
        <VChip label="delete me" onClick={()=>{console.log("Clicked on 'delete me'")}} onDelete={()=>{console.log("deleting")}}/>
        </VThemeProvider>
    </div>
)

export default TextInputExample