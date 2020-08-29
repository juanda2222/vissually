
import React from "react"

// @ts-ignore: has no exported member 'anOldHope'
import { anOldHope, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';

import NumberInputExampleCode from "../../assets/NumberInputExamples"
import NumberInputExample from "../examples/NumberInputExamples"

function TextInputBanner (props: {dark?:boolean}) {
  return (
    <div>
        <h3 style={{ color:props.dark ? "#ffffff":"#000000" }}>Number VInput examples:</h3>
        <NumberInputExample dark={props.dark}/>
        <h3 style={{ color:props.dark ? "#ffffff":"#000000" }}>Full Code:</h3>
        <SyntaxHighlighter language="javascript" style={props.dark ? anOldHope : docco}>
            {NumberInputExampleCode.string}
        </SyntaxHighlighter>
    </div>
  );
};


export default TextInputBanner