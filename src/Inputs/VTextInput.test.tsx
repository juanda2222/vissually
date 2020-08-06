
import React from "react"
import renderer from 'react-test-renderer';
import VTextInput from './VTextInput'

describe('VTextInput', () => {

  test('VTextInput declaration has no errors', () => {
    expect(VTextInput).toBeTruthy()
  })

  test("VTextInput dDefault render. Snapshot test", () => { 
    const TextInputTree = renderer.create(<VTextInput/>).toJSON();
    console.log(TextInputTree)
    expect(TextInputTree).toMatchSnapshot();
  })

  test("VTextInput rendering with props. Snapshot test", () => { 

    const TextInputTreeProps = renderer.create(
        <VTextInput
        className="some_classname"
        placeholder="heeey"
        onChange={(e) => {
          console.log("on change")
          console.log("Value", e.target.value)
        }}
        />
    ).toJSON();

    console.log(TextInputTreeProps)
    expect(TextInputTreeProps).toMatchSnapshot();
  })

  test("VTextInput rendering with props type='number'. Snapshot test", () => { 

    const TextInputTreeProps = renderer.create(
        <VTextInput
        className="some_classname"
        placeholder="age"
        name="age"
        type="number"
        onChange={(e) => {
          console.log("on change")
          console.log("Value", e.target.value)
        }}
        />
    ).toJSON();

    console.log(TextInputTreeProps)
    expect(TextInputTreeProps).toMatchSnapshot();
  })


})
