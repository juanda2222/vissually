
import React from "react"

// @ts-ignore: has no exported member 'anOldHope'
import { anOldHope, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import  SyntaxHighlighter from 'react-syntax-highlighter';

import StylesThemeExampleCode from "../../assets/StylesThemeExample"
import StylesThemeExample from "../examples/StylesThemeExample"

function TextInputBanner (props: {dark?:boolean}) {
  return (
    <div> 
        <h3 style={{ color:props.dark ? "#ffffff":"#000000" }}>Theme example:</h3>
        <StylesThemeExample dark={props.dark}/>
        <h3 style={{ color:props.dark ? "#ffffff":"#000000" }}>Full Code:</h3>
        <SyntaxHighlighter language="javascript" style={props.dark ? anOldHope : docco}>
            {StylesThemeExampleCode.string}
        </SyntaxHighlighter>
    </div>
  );
};


export default TextInputBanner