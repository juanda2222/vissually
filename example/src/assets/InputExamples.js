
export default {

    string:`
    import React from 'react'
    import {
        VTextInput,
        VThemeProvider,
    } from 'vissually'

    const TextInputExample = props => (
        
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h3>Inputs:</h3>
            <p> Default Text Inputs: </p>
            <VTextInput placeholder="Placeholder!" name="name" id='name' />
            <p> Themed Text Inputs: </p>
            <VThemeProvider secundary>
                <VTextInput placeholder="Placeholder!" name="name" id='name' />
            </VThemeProvider>
        </div>
    )

    export default TextInputExample
    `
}
