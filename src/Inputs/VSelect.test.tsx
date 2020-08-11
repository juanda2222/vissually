
import React from "react"
import renderer from 'react-test-renderer';
import VSelect from './VSelect'

describe('VSelect', () => {

  test('VSelect declaration has no errors', () => {
    expect(VSelect).toBeTruthy()
  })

  test("Default render. Snapshot test", () => { 
    const SelectTree = renderer.create(<VSelect list={["1","2"]} label="label" />).toJSON();
    console.log(SelectTree)
    expect(SelectTree).toMatchSnapshot();
  })

  test("Rendering with props. Snapshot test", () => { 
    
    const SelectTreeWithProps = renderer.create(
        <VSelect
          list={["some_thing", "some_name", "some_name2", "other name", "whatever list"]}
          onSelect={(i:number, value:any) => { console.log("clicked!", i.toString(10), value) }}
          label = "label"
        />
    ).toJSON();

    console.log(SelectTreeWithProps)
    expect(SelectTreeWithProps).toMatchSnapshot();
  })


})
