
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
        onClick={(i: number, text: string) => {
          console.log("clicked! index:", i.toString(10), " Text: ", text)
        }}
        onDelete={(i: number, text: string) => {
          console.log("Deleted! index:", i.toString(10), " Text: ", text)
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
        onClick={(i: number, text: string) => {
          console.log("clicked! index:", i.toString(10), " Text: ", text)
        }}
        onDelete={(i: number, text: string) => {
          console.log("Deleted! index:", i.toString(10), " Text: ", text)
        }}
      />
    ).toJSON();

    console.log(vChipListSnap)
    expect(vChipListSnap).toMatchSnapshot();
  })


})
