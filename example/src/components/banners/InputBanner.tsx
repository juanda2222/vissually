
import React from "react"

// @ts-ignore: has no exported member 'anOldHope'
import { anOldHope, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';

import TextInputExampleCode from "../../assets/InputExamples"
import TextInputExample from "../examples/InputExamples"

const TextInputBanner = (props: {dark?:boolean}) => {
  return (
    <div>
        <h3>VInput examples:</h3>
        <TextInputExample/>
        <h3>Full Code:</h3>
        <SyntaxHighlighter language="javascript" style={props.dark ? anOldHope : docco}>
            {TextInputExampleCode.string}
        </SyntaxHighlighter>
    </div>
  );
};


export default TextInputBanner