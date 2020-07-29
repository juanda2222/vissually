
import React from "react"
import renderer from 'react-test-renderer';
import VButton from './VButton'

describe('VButton', () => {

  test('Button declaration has no errors', () => {
    expect(VButton).toBeTruthy()
  })

  test("Default render. Snapshot test", () => { 
    const ButtonTree = renderer.create(<VButton>Button test name</VButton>).toJSON();
    console.log(ButtonTree)
    expect(ButtonTree).toMatchSnapshot();
  })

  test("Rendering with props. Snapshot test", () => { 
3

    const ButtonWithProps = renderer.create(
        <VButton
        className="some_classname"
        onClick={(e) => { console.log("Click Event ", e) }}
        >
          Button test name
        </VButton>
    ).toJSON();

    console.log(ButtonWithProps)
    expect(ButtonWithProps).toMatchSnapshot();
  })


})
