
import React from "react"

// @ts-ignore: has no exported member 'anOldHope'
import { anOldHope, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import  SyntaxHighlighter from 'react-syntax-highlighter';

import AutoCompleteExamplesCode from "../../assets/AutoCompleteExamples"
import AutoCompleteExamples from "../examples/AutoCompleteExamples"

const TextInputBanner = (props: {dark?:boolean}) => {
  return (
    <div>
      <h3 style={{color:props.dark ? "#ffffff":"#000000"}}>AutoComplete examples:</h3>
        <AutoCompleteExamples/>
        <h3 style={{color:props.dark ? "#ffffff":"#000000"}}>Full Code:</h3>
        <SyntaxHighlighter language="javascript" style={props.dark ? anOldHope : docco}>
            {AutoCompleteExamplesCode.string}
        </SyntaxHighlighter>
    </div>
  );
};


export default TextInputBanner