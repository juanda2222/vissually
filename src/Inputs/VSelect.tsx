import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components';

import styles from './VSelect.module.css'
import { Color2Vec } from "../Tools/ColorTools"
import { DefaultThemes } from "../ThemeProvider/ThemeProvider"

const VTextInput: React.FunctionComponent<SelectProps> = ({
  //styling properties
  className,
  style,
  theme,
  primary, secundary, dark,

  //functional properties
  list,
  onChange,
}) => {  

  // get the theme from the context
  const contex_theme:Theme = useContext(ThemeContext);
  const wrapped_className = [styles.list_style, className].join(" ")

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
    current_theme = theme
  }
  
  // generate the component from the style
  const rgb_list = Color2Vec(current_theme.color1)
  const StyledInput = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${current_theme.textColor2};
    background: rgba(${rgb_list[0]}, ${rgb_list[1]}, ${rgb_list[2]}, 0.2);
    border: none;
    border-radius: 3px;
  `;

  const div_list = list.map(() => {
    return (<img 
      src="equilateral.svg" 
      alt="triangle with all three sides equal"
      height="87"
      width="100"
    />)
  })

  return (
    <div>
      {}  
    </div>
  )
}



VTextInput.defaultProps = {
  className: "",
  type: "text",
  theme: DefaultThemes.primary
};


export default VTextInput