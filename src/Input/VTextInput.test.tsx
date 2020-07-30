
import React from "react"
import renderer from 'react-test-renderer';
import VTextInput from './VTextInput'

describe('VButton', () => {

  test('Button declaration has no errors', () => {
    expect(VTextInput).toBeTruthy()
  })

  test("Default render. Snapshot test", () => { 
    const ButtonTree = renderer.create(<VTextInput/>).toJSON();
    console.log(ButtonTree)
    expect(ButtonTree).toMatchSnapshot();
  })

  test("Rendering with props. Snapshot test", () => { 
3

    const ButtonWithProps = renderer.create(
        <VTextInput
        className="some_classname"
        />
    ).toJSON();

    console.log(ButtonWithProps)
    expect(ButtonWithProps).toMatchSnapshot();
  })


})
