
import React from "react"

// @ts-ignore: has no exported member 'anOldHope'
import { docco, anOldHope  } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import  SyntaxHighlighter from 'react-syntax-highlighter';

import ChipExampleCode from "../../assets/ChipExamples"
import ChipExample from "../examples/ChipExamples"

const TextInputBanner = (props:{dark?:boolean}) => {
  return (
    <div>
        <h3 style={{ color:props.dark ? "#ffffff":"#000000" }}>Chip examples:</h3>
        <ChipExample/>
        <h3 style={{ color:props.dark ? "#ffffff":"#000000" }}>Full Code:</h3>
        <SyntaxHighlighter language="javascript" style={props.dark ? anOldHope : docco}>
            {ChipExampleCode.string}
        </SyntaxHighlighter>
    </div>
  );
};


export default TextInputBanner