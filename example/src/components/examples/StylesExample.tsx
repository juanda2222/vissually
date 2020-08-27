
import React from 'react'
import {
    VButton,
    VInput,
  } from 'vissually'

function StylesExample() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fafafa"
        }}>
            <VButton style={{ padding: "30px", }}>{"BIG"}</VButton>
            <VButton style={{ padding: "5px" }}>{"small"}</VButton>
            <VInput parentStyle={{ width: "500px" }} placeholder="large" name="name" />
        </div>
    )
}

export default StylesExample