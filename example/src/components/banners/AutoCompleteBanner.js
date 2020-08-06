
import React from "react"

import  SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import AutoCompleteExamplesCode from "../../assets/AutoCompleteExamples"
import AutoCompleteExamples from "../examples/AutoCompleteExamples"

const TextInputBanner = (props) => {
  return (
    <div>
        <h3>AutoComplete examples:</h3>
        <AutoCompleteExamples/>
        <h3>Full Code:</h3>
        <SyntaxHighlighter language="javascript" style={props.dark ? anOldHope : docco}>
            {AutoCompleteExamplesCode.string}
        </SyntaxHighlighter>
    </div>
  );
};


export default TextInputBanner