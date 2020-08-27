
    export default {
      string: `
import React from 'react'
import {
    VButton,
    VThemeProvider,
    VInput,
    VThemeType
  } from 'vissually'


const custom_theme = {
    textColor1: "rgb(0, 0, 0)", 
    textColor2: "rgb(255, 255, 255)", 
    color1: "#6D597A", 
    color2: "#E56B6F", 
    backgroundColor1: "rgb(255, 255, 255)", 
    backgroundColor2: "rgb(70, 140, 170)", 
} as VThemeType

const StylesExample = () => (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fafafa",
    }}>
        <VThemeProvider secondary>
            <p>Default theme provider:</p>
            <VButton style={{ padding:"30px", }}>{"BIG"}</VButton>
            <VButton style={{ padding: "5px" }}>{"small"}</VButton>
            <VInput parentStyle={{ width: "400px" }} placeholder="large" name="name"/>
        </VThemeProvider>
        <VThemeProvider theme={custom_theme}>
            <p>Custom theme:</p>
            <VButton style={{ padding:"30px" }}>{"BIG"}</VButton>
            <VButton style={{ padding: "5px" }}>{"small"}</VButton>
            <VInput parentStyle={{ width: "400px" }} placeholder="large" name="name"/>
        </VThemeProvider>
    </div>
)

export default StylesExample` 
    }
    