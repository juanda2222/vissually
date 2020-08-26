
import React from 'react'
import { VInput } from 'vissually'

const TextInputExample = () => (
    
    <div style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "15px",
        backgroundColor: "#fafafa"
    }}>
        <VInput placeholder="default" name="year" type="number"
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                console.log("default string: ", e.target.value)
            }}
        />
        <VInput secondary placeholder="secondary" name="year" type="number"
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                console.log("secondary string: ", e.target.value)
            }}
        />
        <VInput 
            style ={{backgroundColor:"rgba(170,50,50, 0.3)", borderColor:"rgb(150,20,20)"}} 
            placeholder="custom" 
            type="number"
            name="year" 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log("secondary string: ", e.target.value)
            }} />
    </div>
)

export default TextInputExample