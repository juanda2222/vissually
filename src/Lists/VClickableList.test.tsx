
import React from "react"
import renderer from 'react-test-renderer';
import VClickableList from './VClickableList'

describe('VClickableList', () => {

  test('VClickableList declaration has no errors', () => {
    expect(VClickableList).toBeTruthy()
  })

  test("Default render. no list given", () => { 
    const ButtonTree = renderer.create(<VClickableList list={["1", "2"]}/>).toJSON();
    console.log(ButtonTree)
    expect(ButtonTree).toMatchSnapshot();
  })

  test("Rendering with props. Snapshot test", () => { 

    const vClickableListSnap = renderer.create(
      <VClickableList
        list={["some_thing", "some_name", "some_name2", "other name", "whatever list"]}
        onClick={({ index, label }) => {
          console.log("clicked! index:", index.toString(10), " Text: ", label)
        }}
      />
    ).toJSON();

    console.log(vClickableListSnap)
    expect(vClickableListSnap).toMatchSnapshot();
  })


})
