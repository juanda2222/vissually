
import React from "react"

import  { Light   as SyntaxHighlighter }  from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import TextInputExampleCode from "../../assets/TextInputExamples"
import TextInputExample from "../examples/TextInputExamples"

const TextInputBanner = (props) => {
  return (
    <div>
        <h3>TextInput examples:</h3>
        <TextInputExample/>
        <h3>Full Code:</h3>
        <SyntaxHighlighter language="javascript" style={props.dark ? anOldHope : docco}>
            {TextInputExampleCode.string}
        </SyntaxHighlighter>
    </div>
  );
};


export default TextInputBanner