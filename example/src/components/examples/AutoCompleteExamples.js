
import React from 'react'
import {
    VTextInput,
    VAutoComplete,
    VThemeProvider,
  } from 'vissually'

const autocomplete_list = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
]

const TextInputExample = props => (
    
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h3>AutoComplete:</h3>
        <p> Default AutoComplete: </p>
        <VAutoComplete
            options={autocomplete_list}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <VTextInput {...params} placeholder="Combo box" />}
        />
        <p> Themed AutoComplete: </p>
        <VThemeProvider secundary>
            <VAutoComplete
                options={autocomplete_list}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => <VTextInput {...params} placeholder="placeholder!" />}
            />
        </VThemeProvider>
    </div>
)

export default TextInputExample