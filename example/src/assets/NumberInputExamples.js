
export default {

    string:`
    
    import React from 'react'
    import { VInput } from 'vissually'

    const TextInputExample = () => (
        
        <div style={{display:"flex",  justifyContent:"center", marginBottom:"15px"}}>
            <VInput placeholder="default" name="name" type="number"
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    console.log("default string: ", e.target.value)
                }}
            />
            <VInput secundary placeholder="secundary" name="name" type="number"
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    console.log("secundary string: ", e.target.value)
                }}
            />
            <VInput 
                style ={{backgroundColor:"rgba(170,50,50, 0.3)", borderColor:"rgb(150,20,20)"}} 
                placeholder="custom" 
                type="number"
                name="name" 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    console.log("secundary string: ", e.target.value)
                }} />
        </div>
    )

    export default TextInputExample
    `
}
