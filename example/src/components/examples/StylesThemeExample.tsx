
import React from 'react'
import {
    VButton,
    VThemeProvider,
    VInput,
  } from 'vissually'


interface Theme {
    textColor1: string,
    textColor2: string,
    color1: string,
    color2: string,
    backgroundColor1: string,
    backgroundColor2: string,
}

const custom_theme:Theme = {
    textColor1: "rgb(0, 0, 0)", 
    textColor2: "rgb(255, 255, 255)", 
    color1: "#6D597A", 
    color2: "#E56B6F", 
    backgroundColor1: "rgb(255, 255, 255)", 
    backgroundColor2: "rgb(70, 140, 170)", 
}

const StylesExample = () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <VThemeProvider secundary>
            <p>Default theme provider:</p>
            <VButton style={{padding:"30px", }}>{"BIG"}</VButton>
            <VButton style={{ padding: "5px" }}>{"small"}</VButton>
            <VInput style={{width: "400px"}} placeholder="large" name="name"/>
        </VThemeProvider>
        <VThemeProvider theme={custom_theme}>
            <p>Custom theme:</p>
            <VButton style={{padding:"30px", }}>{"BIG"}</VButton>
            <VButton style={{ padding: "5px" }}>{"small"}</VButton>
            <VInput style={{width: "400px"}} placeholder="large" name="name"/>
        </VThemeProvider>
    </div>
)

export default StylesExample