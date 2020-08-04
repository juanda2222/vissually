
import React from "react"
import renderer from 'react-test-renderer';
import VSelect from './VSelect'

describe('VButton', () => {

  test('Button declaration has no errors', () => {
    expect(VSelect).toBeTruthy()
  })

  test("Default render. Snapshot test", () => { 
    const ButtonTree = renderer.create(<VSelect/>).toJSON();
    console.log(ButtonTree)
    expect(ButtonTree).toMatchSnapshot();
  })

  test("Rendering with props. Snapshot test", () => { 
    
    const ButtonWithProps = renderer.create(
        <VSelect
        list={["some_thing", "some_name", "some_name2", "other name", "whatever list"]}
        onSelect={(i, value) => { console.log("clicked!", i, value) }}
        label = "label"
        />
    ).toJSON();

    console.log(ButtonWithProps)
    expect(ButtonWithProps).toMatchSnapshot();
  })


})
