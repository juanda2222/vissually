
import React from "react"
import renderer from 'react-test-renderer';
import VClickableList from './VClickableList'

describe('VButton', () => {

  test('Button declaration has no errors', () => {
    expect(VClickableList).toBeTruthy()
  })

  test("Default render. no list given", () => { 
    const ButtonTree = renderer.create(<VClickableList list={["1","2"]}/>).toJSON();
    console.log(ButtonTree)
    expect(ButtonTree).toMatchSnapshot();
  })

  test("Rendering with props. Snapshot test", () => { 

    const ButtonWithProps = renderer.create(
        <VClickableList
        list={["some_thing", "some_name", "some_name2", "other name", "whatever list"]}
        onCLick={(i:number, text:string) => { console.log("clicked! index:", i.toString(10), " Text: ", text)}}
        />
    ).toJSON();

    console.log(ButtonWithProps)
    expect(ButtonWithProps).toMatchSnapshot();
  })


})
