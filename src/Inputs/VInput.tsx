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


const StyledInput = styled("input") <{ rgbTextColor: number[], rgbFocusedColor: number[] }>`
  border: 2px solid ${props => `rgb(${props.rgbTextColor[0] -30}, ${props.rgbTextColor[1] -30}, ${props.rgbTextColor[2] -30})`};
  color: ${props => `rgb(${props.rgbTextColor[0]}, ${props.rgbTextColor[1]}, ${props.rgbTextColor[2]})`};
  &:focus {
    border-color: ${props => `rgb(${props.rgbFocusedColor[0]}, ${props.rgbFocusedColor[1]}, ${props.rgbFocusedColor[2]});`};
  }
   
`;

const StyledLabel = styled("label") <{
  isFocused: boolean,
  rgbTextColor: number[],
  rgbFocusedTextColor: number[]
}>`
  color: ${props => props.isFocused ?
    `rgb(${props.rgbFocusedTextColor[0]}, ${props.rgbFocusedTextColor[1]}, ${props.rgbFocusedTextColor[2]})` :
    `rgb(${props.rgbTextColor[0]}, ${props.rgbTextColor[1]}, ${props.rgbTextColor[2]})`
  };
`;

function VTextInput ({
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
}: InputProps ){  

  // get the theme from the context
  const context_theme = useContext(ThemeContext);
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
  let current_theme: DefaultTheme;
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
    current_theme = {
      ...DefaultThemes.primary,
      ...(theme && theme)
    } 
  }
  
  // generate the component from the style
  const rgbMainColor = Color2Vec(current_theme.color1)
  const rgbTextColor = Color2Vec(current_theme.textColor1)
  
  return (
    <div
      className={styles.container}
      style={parentStyle}
    >
      <StyledInput
        //custom style:
        rgbFocusedColor={rgbMainColor}
        rgbTextColor={rgbTextColor}
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
        rgbTextColor={rgbTextColor}
        rgbFocusedTextColor={rgbMainColor}
        
      >
        {placeholder}
      </StyledLabel>
    </div>
  )
}


export default VTextInput