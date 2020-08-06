
import React, {
    useState
} from 'react'
import {
    VTextInput,
    VThemeProvider,
    VButton,
  } from 'vissually'

const TextInputExample = props => {
    
    const [text, setText] = useState("")
    return (    
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h3>Inputs:</h3>
            <p> Default Text Inputs: </p>
            <VTextInput placeholder="default Placeholder!" name="name" onChange={(e)=>{console.log("default string: ",e.target.value)}}/>
            <p> Fully controlled: </p>
            <VTextInput placeholder="controlled Placeholder!" name="name" value={text} 
                onChange={(e)=>{
                    setText(e.target.value)
                    console.log("controlled text: ", text)
                }}
            />
            <VButton onClick={()=>{setText("")}}>Delete</VButton>
            <p> Themed Text Inputs: </p>
            <VThemeProvider secundary>
                <VTextInput placeholder="Themed placeholder!" name="name" onChange={(e)=>{console.log("Themed string: ",e.target.value)}}/>
            </VThemeProvider>
        </div>
    )
}
export default TextInputExample