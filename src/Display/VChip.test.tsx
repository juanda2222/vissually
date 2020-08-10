
import React from "react"
import renderer from 'react-test-renderer';
import VChip from './VChip'

describe('VButton', () => {

  test('Button declaration has no errors', () => {
    expect(VChip).toBeTruthy()
  })

  test("Default render. no list given", () => { 
    const Chip = renderer.create(<VChip label="snapshot"/>).toJSON();
    console.log(Chip)
    expect(Chip).toMatchSnapshot();
  })

  test("Rendering with props. Snapshot test", () => { 

    const ChipList = renderer.create(
      <div>
        <VChip label="label!"/>
        <VChip label="other one" onClick={()=>{console.log("Clicked on 'other one'")}}/>
        <VChip label="delete me" onClick={()=>{console.log("Clicked on 'delete me'")}} onDelete={()=>{console.log("deleting")}}/>
      </div>
    ).toJSON();
    console.log(ChipList)
    expect(ChipList).toMatchSnapshot();
  })


})
