
import React from 'react'
import { VButton } from 'vissually'

const ButtonExample = () => (
    
    <div style={{display:"flex",  justifyContent:"center"}}>
        <VButton>{"Default"}</VButton>
        <VButton secundary>{"Secundary"}</VButton>
        <VButton style={{
            backgroundColor: "rgb(170,50,50)",
            borderColor: "rgb(150,20,20)"
        }}>{"Custom"}</VButton>
    </div>
)

export default ButtonExample