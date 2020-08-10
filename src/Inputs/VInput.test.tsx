
import React from "react"
import renderer from 'react-test-renderer';
import VInput from './VInput'

describe('VInput', () => {

  test('VInput declaration has no errors', () => {
    expect(VInput).toBeTruthy()
  })

  test("VInput dDefault render. Snapshot test", () => { 
    const TextInputTree = renderer.create(<VInput/>).toJSON();
    console.log(TextInputTree)
    expect(TextInputTree).toMatchSnapshot();
  })

  test("VInput rendering with props. Snapshot test", () => { 

    const TextInputTreeProps = renderer.create(
        <VInput
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

  test("VInput rendering with props type='number'. Snapshot test", () => { 

    const TextInputTreeProps = renderer.create(
        <VInput
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
