
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

const custom_theme_dark = {
    textColor1: "rgb(255, 255, 255)", 
    textColor2: "rgb(0, 0, 0)", 
    color1: "#E56B6F", 
    color2: "#6D597A", 
    backgroundColor1: "rgb(255, 255, 255)", 
    backgroundColor2: "rgb(70, 140, 170)", 
} as VThemeType

function StylesExample (props: { dark?: boolean }){
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <VThemeProvider secondary>
                <h4 style={{ color: props.dark ? "#ffffff" : "#000000" }}> Default theme provider: </h4>
                <VButton style={{ padding: "30px", }}>{"BIG"}</VButton>
                <VButton style={{ padding: "5px" }}>{"small"}</VButton>
                <VInput
                    parentStyle={{ width: "400px" }}
                    placeholder="large"
                    name="name"
                    primaryDark={props.dark}
                />
            </VThemeProvider>
            <VThemeProvider theme={props.dark ? custom_theme_dark : custom_theme}>
                <h4 style={{ color: props.dark ? "#ffffff" : "#000000" }}> Custom theme: </h4>
                <VButton style={{ padding: "30px" }}>{"BIG"}</VButton>
                <VButton style={{ padding: "5px" }}>{"small"}</VButton>
                <VInput parentStyle={{ width: "400px" }} placeholder="large" name="name" />
            </VThemeProvider>
        </div>
    )
}

export default StylesExample