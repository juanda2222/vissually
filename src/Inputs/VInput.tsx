import React, {
  useContext,
  useState,
  //useEffect,
  //useRef,
} from 'react'


import styles from './VInput.module.css'
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
  parentStyle,
  labelStyle,
  theme,
  primary, secondary, primaryDark, secondaryDark,

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
  const context_theme: Theme = useContext(ThemeContext);
  const [inputIsFocused, setInputFocused] = useState(false)

  // all the event handlers wrapped for custom styling
  const wrappedOnFocus = (
    event: React.FocusEvent<HTMLInputElement>,
  ) => {
    setInputFocused(true)
    if (typeof onFocus === 'function') {onFocus(event)}
  }

  const wrappedOnBlur = (
    event: React.FocusEvent<HTMLInputElement>,
  ) => {
    setInputFocused(false)
    if (typeof onBlur === 'function') {onBlur(event)}
  }

  // generate the theme depending on the boolean inputs or the theme input
  const wrappedClassName = [styles.input_element, className ? className : ""].join(" ")
  let current_theme:Theme;
  if (secondary) {
    current_theme = DefaultThemes.secondary
  } else if (primaryDark) {
    current_theme = DefaultThemes.primaryDark
  } else if (secondaryDark) {
    current_theme = DefaultThemes.secondaryDark
  } else if (primary) {
    current_theme = DefaultThemes.primary
  } else if (!(typeof (context_theme) == "undefined")) {
    current_theme = context_theme
  } else {
    current_theme = theme ? theme : DefaultThemes.primary
  }
  
  // generate the component from the style
  const rgb_main_list = Color2Vec(current_theme.color1)
  const rgb_textColor_list = Color2Vec(current_theme.textColor1)
  
  return (
    <div
      className={styles.container}
      style={parentStyle}
    >
      <StyledInput
        //custom style:
        main_rgb={rgb_main_list}
        textColor={rgb_textColor_list}
        // parent styling props:
        className={wrappedClassName}
        style={style}
        // functional props:
        value={value}
        placeholder={placeholder}
        id={id}
        name={name}
        type={type}
        required={required}
        onChange={onChange}
        onFocus={wrappedOnFocus}
        onBlur={wrappedOnBlur}
      />      
      <StyledLabel
        className={styles.label_element}
        style={labelStyle}
        isFocused={inputIsFocused}
        textColor={rgb_textColor_list}
        main_rgb={rgb_main_list}
      >
        {placeholder}
      </StyledLabel>
    </div>
  )
}


export default VTextInput