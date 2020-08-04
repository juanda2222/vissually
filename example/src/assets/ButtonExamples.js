
export default {
    string:`
        import React from 'react'
        import {
            VButton,
            VThemeProvider,
        } from 'vissually'
        
        const ButtonExample = props => (
            
            <div style={{display:"flex", flexDirection:"column",  alignItems:"center", }}>
                <h3>Buttons:</h3>
                <p> Default Button: </p>
                <VButton>{"hey"}</VButton>
                <p> Themed Button: </p>
                <VThemeProvider secundary>
                    <VButton>{"themed button"}</VButton>
                </VThemeProvider>
            </div>
        )
        
        export default ButtonExample
        `
}

