import React, {
  useContext,
  useState,
  //useEffect,
  //useRef,
} from 'react'


import styles from './VTextInput.module.css'
import styled from 'styled-components';
import { Color2Vec } from "../Tools/ColorTools"
import { DefaultThemes, ThemeContext } from "../ThemeProvider/ThemeProvider"


const StyledInput = styled("input") <{ textColor: number[], main_rgb: number[] }>`
  border: 2px solid ${props => `rgb(${props.textColor[0] -30}, ${props.textColor[1] -30}, ${props.textColor[2] -30})`};
  color: ${props => `rgb(${props.textColor[0]}, ${props.textColor[1]}, ${props.textColor[2]})`};
  &:focus {
    border-color: ${props => `rgb(${props.main_rgb[0]}, ${props.main_rgb[1]}, ${props.main_rgb[2]});`};
  }
   
`;

const StyledLabel = styled("label") <{ textColor: number[], isFocused: boolean, main_rgb: number[] }>`
  color: ${props => props.isFocused ?
    `rgb(${props.main_rgb[0]}, ${props.main_rgb[1]}, ${props.main_rgb[2]})` :
    `rgb(${props.textColor[0]}, ${props.textColor[1]}, ${props.textColor[2]})`
  };
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
  onFocus,
  onBlur,
}) => {  

  // get the theme from the context
  const contex_theme: Theme = useContext(ThemeContext);
  const [isFocused, setFocused] = useState(false)

  // all the event handlers wrapped for custom styling
  const wrapped_onFocus = (
    event: React.FocusEvent<HTMLInputElement>,
  ) => {
    if (typeof onFocus === 'function') {
      setFocused(true)
      onFocus(event)
    }
  }

  const wrapped_onBlur = (
    event: React.FocusEvent<HTMLInputElement>,
  ) => {
    if (typeof onBlur === 'function') {
      setFocused(false)
      onBlur(event)
    }
  }

  // generat the theme depending on the boolean inputs or the theme input
  const wrapped_className = [styles.input_element, className ? className : ""].join(" ")
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
  const rgb_main_list = Color2Vec(current_theme.color1)
  const rgb_textColor_list = Color2Vec(current_theme.textColor1)
  
  return (
    <div
      className={styles.container}
    >
      <StyledInput
        //custom style:
        main_rgb={rgb_main_list}
        textColor={rgb_textColor_list}
        // parent stying props:
        className={wrapped_className}
        style={style}
        // functional props:
        value={value}
        placeholder={placeholder}
        id={id}
        name={name}
        type={type}
        required={required}
        onChange={onChange}
        onFocus={wrapped_onFocus}
        onBlur={wrapped_onBlur}
      />      
      <StyledLabel
        className={styles.label_element}
        isFocused={isFocused}
        textColor={rgb_textColor_list}
        main_rgb={rgb_main_list}
      >
        {placeholder}
      </StyledLabel>
    </div>
  )
}


export default VTextInput