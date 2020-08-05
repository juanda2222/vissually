
import React from "react"

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import ButtonExampleCode from "../../assets/ButtonExamples"
import ButtonExample from "../examples/ButtonExamples"

const ButtonBanner = (props) => {
  return (
    <div>
        <h3>Button examples:</h3>
        <ButtonExample/>
        <h3>Full Code:</h3>
        <SyntaxHighlighter language="javascript" style={props.dark ? anOldHope : docco}>
            {ButtonExampleCode.string}
        </SyntaxHighlighter>
    </div>
  );
};


export default ButtonBanner