import React, { useContext } from 'react'


import styles from './VTextInput.module.css'
import styled, { ThemeContext } from 'styled-components';
import { Color2Vec } from "../Tools/ColorTools"

const VTextInput = ({
  className,
  theme,
  value,
  id,
  type,
  onChange,
}: InputProps) => {  

  const wrapped_className = [styles.input_text, className].join(" ")

  // create the theme depending 
  const contex_theme = useContext(ThemeContext);
  var input_theme;
  // use theme if a style is given
  if (!(typeof (contex_theme) == "undefined")) {
    input_theme = contex_theme
  } else {
    input_theme = theme
  }
  
  const rgb_list = Color2Vec(input_theme.color2)
  const StyledInput = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${input_theme.color1};
    background: rgba(${rgb_list[0]}, ${rgb_list[1]}, ${rgb_list[2]}, 0.2);
    border: none;
    border-radius: 3px;
  `;
  
  return (
    <StyledInput
      type={type}
      className={wrapped_className} 
      id={id}
      value={value} 
      onChange={onChange}
    />
  )
}



VTextInput.defaultProps = {
  className: "",
  //type="text",
  //value="",
  theme: {
    textColor1: "#ffffff",
    textColor2: "#ffffff",
    color1: "#135b75",
    color2: "#135b75",
    backgroundColor1: "#ffffff",
    backgroundColor2: "#ffffff",
  }

};


export default VTextInput