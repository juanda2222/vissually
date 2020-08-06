
import React from "react"

import  SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import ChipExampleCode from "../../assets/ChipExamples"
import ChipExample from "../examples/ChipExamples"

const TextInputBanner = (props) => {
  return (
    <div>
        <h3>Chip examples:</h3>
        <ChipExample/>
        <h3>Full Code:</h3>
        <SyntaxHighlighter language="javascript" style={props.dark ? anOldHope : docco}>
            {ChipExampleCode.string}
        </SyntaxHighlighter>
    </div>
  );
};


export default TextInputBanner