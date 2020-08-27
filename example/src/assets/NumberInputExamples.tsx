
    export default {
      string: `
import React from 'react'
import { VInput } from 'vissually'

const TextInputExample = (props: {dark?:boolean}) => (
    
    <div style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "15px",
    }}>
        <VInput
            primaryDark={props.dark}
            placeholder="default"
            name="year"
            type="number"
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                console.log("default string: ", e.target.value)
            }}
        />
        <VInput
            secondary={!props.dark}
            secondaryDark={props.dark}
            placeholder="secondary"
            name="year"
            type="number"
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                console.log("secondary string: ", e.target.value)
            }}
        />
        <VInput 
            style={{ backgroundColor: "rgba(170,50,50, 0.1)", borderColor: "rgb(150,20,20)" }} 
            labelStyle={{ color: "rgb(150,20,20)" }}
            primaryDark={props.dark}
            placeholder="custom" 
            type="number"
            name="year" 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log("secondary string: ", e.target.value)
            }} />
    </div>
)

export default TextInputExample` 
    }
    