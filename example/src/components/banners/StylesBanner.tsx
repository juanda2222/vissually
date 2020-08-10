
import React from "react"

// @ts-ignore: has no exported member 'anOldHope'
import { anOldHope, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import  SyntaxHighlighter from 'react-syntax-highlighter';

import StylesExampleCode from "../../assets/StylesExample"
import StylesExample from "../examples/StylesExample"

const TextInputBanner = (props: {dark?:boolean}) => {
  return (
    <div>
        <h3>Simple styling examples:</h3>
        <StylesExample/>
        <h3>Full Code:</h3>
        <SyntaxHighlighter language="javascript" style={props.dark ? anOldHope : docco}>
            {StylesExampleCode.string}
        </SyntaxHighlighter>
    </div>
  );
};


export default TextInputBanner