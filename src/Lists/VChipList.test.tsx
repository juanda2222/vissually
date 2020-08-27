
import React from "react"
import renderer from 'react-test-renderer';
import VChipList from './VChipList'

describe('VChipList', () => {

  test('VChipList declaration has no errors', () => {
    expect(VChipList).toBeTruthy()
  })

  test("Default render. no list given", () => { 
    const vChipListSnap = renderer.create(<VChipList list={["1", "2"]}/>).toJSON();
    console.log(vChipListSnap)
    expect(vChipListSnap).toMatchSnapshot();
  })

  test("Rendering with props. Snapshot test", () => { 

    const vChipListSnap = renderer.create(
      <VChipList
        list={["some_thing", "some_name", "some_name2", "other name", "whatever list"]}
        onClick={({ index , label }) => {
          console.log("clicked! index:", index.toString(10), " label: ", label)
        }}
        onDelete={({ index, label }) => {
          console.log("Deleted! index:", index.toString(10), " label: ", label)
        }}
      />
    ).toJSON();

    console.log(vChipListSnap)
    expect(vChipListSnap).toMatchSnapshot();
  })

  test("Rendering with props. Snapshot test (With getLabel property)", () => { 

    const vChipListSnap = renderer.create(
      <VChipList
        list={["some_thing", "some_name", "some_name2", "other name", "whatever list"]}
        getListLabel={(element) => element}
        onClick={({ index, label }) => {
          console.log("clicked! index:", index.toString(10), " label: ", label)
        }}
        onDelete={({ index, label }) => {
          console.log("Deleted! index:", index.toString(10), " label: ", label)
        }}
      />
    ).toJSON();

    console.log(vChipListSnap)
    expect(vChipListSnap).toMatchSnapshot();
  })


})
