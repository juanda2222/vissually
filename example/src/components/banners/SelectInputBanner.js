
import React from "react"

import { PrismLight  as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import SelectInputExampleCode from "../../assets/SelectInputExamples"
import SelectInputExample from "../examples/SelectInputExamples"

const SelectBanner = (props) => {
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