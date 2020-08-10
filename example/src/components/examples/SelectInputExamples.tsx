
import React from 'react'
import {
    VThemeProvider,
    VSelect,
  } from 'vissually'

const SelectInputExample = () => (
    
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <p> Default select: </p>
        <VSelect label="select me" list={["item 1", "item 2", "item 3", "another one", "addition"]}/>
        <p> Very long list: </p>
        <VSelect label="select me" list={
            [
                "item 1", 
                "item 2", 
                "item 3", 
                "another one", 
                "addition",
                "item 7", 
                "item 8", 
                "item 9", 
                "another one", 
                "addition",
                "item 10", 
                "item 11", 
                "item 12", 
                "other one", 
                "last one",
            ]}/>
        <p> Themed Default lists: </p>
        <VThemeProvider secundary>
            <VSelect label="select me" list={["item 1", "item 2", "item 3", "another one", "addition"]}/>
        </VThemeProvider>
    </div>
)

export default SelectInputExample