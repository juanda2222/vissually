
import React from "react"
import renderer from 'react-test-renderer';
//import ReactDOM from 'react-dom';
import VAutoComplete from './VAutoComplete'
import VInput from '../Inputs/VInput'

const autocomplete_list = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
]

describe('AutoComplete', () => {

  test('AutoComplete declaration has no errors', () => {
    expect(VAutoComplete).toBeTruthy()
  })

  test("Default render. Snapshot test", () => { 
    const AutoCompleteTree = renderer.create(<VAutoComplete/>).toJSON();
    console.log(AutoCompleteTree)
    expect(AutoCompleteTree).toMatchSnapshot();
  })

  test("Rendering with props. Snapshot test", () => { 
    
    const AutoCompletePropsTree = renderer.create(
      <VAutoComplete
        options={autocomplete_list}
        getOptionLabel={(option: { [prop:string]: any }) => option.title}
        style={{ width: 300 }}
        renderInput={(params: { [prop:string]: any }) => <VInput {...params} placeholder="Combo box" />}
      />
    ).toJSON();

    console.log(AutoCompletePropsTree)
    expect(AutoCompletePropsTree).toMatchSnapshot();
  })


})

