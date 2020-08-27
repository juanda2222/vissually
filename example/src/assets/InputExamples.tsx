
    export default {
      string: `
import React, { useState } from 'react'
import { VInput, VButton, } from 'vissually'

const TextInputExample = (props: {dark?:boolean}) => {
    
    const [text, setText] = useState("")
    return (    
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <h4 style={{ color:props.dark ? "#ffffff":"#000000" }}>Simple Text Inputs:</h4>
            <div className={"responsiveFlex"} style={{marginBottom:"15px"}}>
                <VInput
                    primaryDark={props.dark}
                    placeholder="default"
                    name="name"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                        console.log("default string: ", e.target.value)
                    }}
                />
                <VInput
                    secondaryDark={props.dark}
                    secondary={!props.dark}
                    placeholder="secondary"
                    name="name"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                        console.log("secondary string: ", e.target.value)
                    }}
                />
                <VInput 
                    primaryDark={props.dark}
                    style={{
                        backgroundColor: "rgba(170,50,50, 0.1)",
                        borderColor: "rgb(150,20,20)"
                    }} 
                    labelStyle={{color:"rgb(150,20,20)"}}
                    placeholder="custom" 
                    name="name" 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        console.log("secondary string: ", e.target.value)
                    }} />
            </div>
            <h4 style={{ color:props.dark ? "#ffffff":"#000000" }}>Fully controlled:</h4>
            <VInput
                placeholder="controlled input"
                name="name"
                primaryDark={props.dark}
                value={text} 
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                    setText(e.target.value)
                    console.log("controlled text: ", text)
                }}
            />
            <VButton onClick={()=>{ setText("") }}>Delete</VButton>
        </div>
    )
}
export default TextInputExample` 
    }
    