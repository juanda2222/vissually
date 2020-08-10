
import React, {
    useState
} from 'react'
import {
    VInput,
    VButton,
  } from 'vissually'

const TextInputExample = props => {
    
    const [text, setText] = useState("")
    return (    
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <p> Default Text Inputs: </p>
            <div>
                <VInput placeholder="default" name="name" onChange={(e)=>{console.log("default string: ",e.target.value)}}/>
                <VInput secundary placeholder="secundary" name="name" onChange={(e)=>{console.log("secundary string: ",e.target.value)}}/>
                <VInput 
                    style ={{backgroundColor:"rgba(170,50,50, 0.3)", borderColor:"rgb(150,20,20)"}}
                    secundary 
                    placeholder="custom" 
                    name="name" 
                    onChange={(e)=>{console.log("secundary string: ",e.target.value)}}/>
            </div>
            <p> Fully controlled: </p>
            <VInput placeholder="controlled input" name="name" value={text} 
                onChange={(e)=>{
                    setText(e.target.value)
                    console.log("controlled text: ", text)
                }}
            />
            <VButton onClick={()=>{setText("")}}>Delete</VButton>
        </div>
    )
}
export default TextInputExample