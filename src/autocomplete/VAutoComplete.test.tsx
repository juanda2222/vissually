
import React from "react"
import renderer from 'react-test-renderer';
import VAutocomplete from './VAutoComplete'
import VTextInput from '../Inputs/VTextInput'



const autocomplete_list = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
]

describe('VButton', () => {

  test('Button declaration has no errors', () => {
    expect(VAutocomplete).toBeTruthy()
  })

  test("Default render. Snapshot test", () => { 
    const ButtonTree = renderer.create(<VAutocomplete/>).toJSON();
    console.log(ButtonTree)
    expect(ButtonTree).toMatchSnapshot();
  })

  test("Rendering with props. Snapshot test", () => { 
    
    const ButtonWithProps = renderer.create(
      <VAutocomplete
        options={autocomplete_list}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => <VTextInput {...params} label="Combo box" variant="outlined" />}
      />
    ).toJSON();

    console.log(ButtonWithProps)
    expect(ButtonWithProps).toMatchSnapshot();
  })


})

