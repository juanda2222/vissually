
import React from 'react'
import { VSelect } from 'vissually'

const example_list=[
        "item 1", 
        "item 2", 
        "item 3", 
        "another one", 
        "addition",
        "item 7", 
        "item 8", 
        "item 9", 
        "another one", 
        "addition",
        "item 10", 
        "item 11", 
        "item 12", 
        "other one", 
        "last one",
    ]
    
function SelectInputExample () {
    return (
        <div className={"responsiveFlex"}>
            <VSelect label="default" list={example_list} />
            <VSelect label="secondary" list={example_list} secondary/>
            <VSelect label="custom" style={{
                backgroundColor: "rgb(170,50,50)",
                borderColor: "rgb(150,20,20)"
            }} list={example_list} />
        </div>
    )
}

export default SelectInputExample