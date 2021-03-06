
import React from "react"

// @ts-ignore: has no exported member 'anOldHope'
import { anOldHope, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';

import ButtonExampleCode from "../../assets/ButtonExamples"
import ButtonExample from "../examples/ButtonExamples"

function ButtonBanner (props: {dark?:boolean}){
  return (
    <div>
        <h3 style={{ color:props.dark ? "#ffffff":"#000000" }}>Button examples:</h3>
        <ButtonExample/>
        <h3 style={{ color:props.dark ? "#ffffff":"#000000" }}>Full Code:</h3>
        <SyntaxHighlighter language="javascript" style={props.dark ? anOldHope : docco}>
            {ButtonExampleCode.string}
        </SyntaxHighlighter>
    </div>
  );
};


export default ButtonBanner