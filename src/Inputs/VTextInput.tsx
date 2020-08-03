import React, { useContext } from 'react'


import styles from './VTextInput.module.css'
import styled from 'styled-components';
import { Color2Vec } from "../Tools/ColorTools"
import { DefaultThemes, ThemeContext } from "../ThemeProvider/ThemeProvider"

const VTextInput: React.FunctionComponent<InputProps> = ({
  //styling properties
  className,
  style,
  theme,
  primary, secundary, dark,

  //functional properties
  value,
  id,
  type,
  onChange,
}) => {  

  // get the theme from the context
  const contex_theme:Theme = useContext(ThemeContext);
  const wrapped_className = [styles.input_text, className ? className : ""].join(" ")

  // generat the theme depending on the boolean inputs or the theme input
  var current_theme;
  if (secundary) {
    current_theme = DefaultThemes.secundary
  } else if (dark) {
    current_theme = DefaultThemes.dark
  } else if (primary) {
    current_theme = DefaultThemes.primary
  } else if (!(typeof (contex_theme) == "undefined")) {
    current_theme = contex_theme
  } else {
    current_theme = theme ? theme : DefaultThemes.primary
  }
  
  // generate the component from the style
  const rgb_list = Color2Vec(current_theme.color1)
  const StyledInput = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${current_theme.textColor1};
    background: rgba(${rgb_list[0]}, ${rgb_list[1]}, ${rgb_list[2]}, 0.3);
    border: none;
    border-radius: 3px;
  `;
  
  return (
    <StyledInput
      type={type ? type : "text"}
      value={value} 
      className={wrapped_className} 
      style={style}
      id={id}
      onChange={onChange}
    />
  )
}


export default VTextInput