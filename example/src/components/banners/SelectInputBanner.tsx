
import React from "react"

// @ts-ignore: has no exported member 'anOldHope'
import { anOldHope, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';

import SelectInputExampleCode from "../../assets/SelectInputExamples"
import SelectInputExample from "../examples/SelectInputExamples"

const SelectBanner = (props: {dark?:boolean}) => {
  return (
    <div>
        <h3>SelectInput examples:</h3>
        <SelectInputExample/>
        <h3>Full Code:</h3>
        <SyntaxHighlighter language="javascript" style={props.dark ? anOldHope : docco}>
            {SelectInputExampleCode.string}
        </SyntaxHighlighter>
    </div>
  );
};


export default SelectBanner