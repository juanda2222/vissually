import React, {
  useContext
} from 'react'


import styles from './VTextInput.module.css'
import styled from 'styled-components';
import { Color2Vec } from "../Tools/ColorTools"
import { DefaultThemes, ThemeContext } from "../ThemeProvider/ThemeProvider"


const StyledInput = styled("input")<{textColor:string, main_rgb:number[]}>`
    
  `;
const StyledLabel = styled("label")<{borderColor:string}>`
  
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
  name,
  type,
  required,
  placeholder,
  onChange,
}) => {  

  
  
  // get the theme from the context
  const contex_theme:Theme = useContext(ThemeContext);
  const wrapped_className = [styles.input_element, className ? className : ""].join(" ")

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
    <div className={styles.container} >
      <StyledInput
        //custom style
        main_rgb={rgb_list}
        textColor={current_theme.textColor1}
        // parent stying props:
        className={wrapped_className} 
        style={style}
        // functional props
        value={value} 
        placeholder={placeholder}
        id={id}
        name={name}
        type={type}
        required={required}
        onChange={onChange}
      />      
      <StyledLabel
        className={styles.label_element}
        borderColor={current_theme.color1}
      >
        Name
      </StyledLabel>
    </div>
  )
}


export default VTextInput