import React, { useContext } from 'react'


import styles from './VTextInput.module.css'
import styled from 'styled-components';
import { Color2Vec } from "../Tools/ColorTools"
import { DefaultThemes, ThemeContext } from "../ThemeProvider/ThemeProvider"


const StyledInput = styled("input")<{textColor:string, main_rgb:number[]}>`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.textColor};
    background: ${props => `rgba(${props.main_rgb[0]}, ${props.main_rgb[1]}, ${props.main_rgb[2]}, 0.3)`};
    border: none;
    border-radius: 3px;
  `;


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
  
  
  return (
    <StyledInput
      main_rgb={rgb_list}
      textColor={current_theme.textColor1}
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