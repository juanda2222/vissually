import React, {
  useContext,
  //useState
} from 'react'


import styles from './VButton.module.css'
import styled from 'styled-components';
import { Color2Vec } from "../Tools/ColorTools"
import { DefaultThemes, ThemeContext } from "../ThemeProvider/ThemeProvider"


const StyledButton = styled("div") <{
  buttonIsActive?: boolean,
  textColor: string,
  rgbMainButtonColor: number[]
}>`

    color: ${props => props.textColor};
    background-color: ${props => `rgb(${props.rgbMainButtonColor[0]}, ${props.rgbMainButtonColor[1]}, ${props.rgbMainButtonColor[2]})`};
    border-bottom: 5px solid ${props => `rgb(${props.rgbMainButtonColor[0] - 40}, ${props.rgbMainButtonColor[1] - 40}, ${props.rgbMainButtonColor[2] - 40})`};

    ${props => props.buttonIsActive ? `
      margin: 18px 8px 11px 8px;
      transform: translate(0px,3px);
      -webkit-transform: translate(0px,3px);
      border-bottom: 1px solid;
      border-color: transparent;
    `: ""}
    ${props => props.buttonIsActive ? "": `&:hover{
      background-color: rgb(${props.rgbMainButtonColor[0] + 20}, ${props.rgbMainButtonColor[1] + 20}, ${props.rgbMainButtonColor[2] + 20});
      border-bottom: 5px solid rgb(${props.rgbMainButtonColor[0] - 20}, ${props.rgbMainButtonColor[1] - 20}, ${props.rgbMainButtonColor[2] - 20});
    }`}
    
    &:active{
      margin: 18px 8px 11px 8px;
      transform: translate(0px,3px);
      -webkit-transform: translate(0px,3px);
      border-bottom: 1px solid;
      border-color: transparent;
    }
  `

function VButton({
  //styling properties
  className,
  style,
  theme,
  primary, secondary, primaryDark, secondaryDark,

  //functional properties
  isPressed,
  children,
  onClick,
}: ButtonProps ){  

  // get the theme from the context and its hooks
  const context_theme = useContext(ThemeContext);


  // all the event handlers wrapped for custom styling
  const wrapped_onClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (typeof onClick === 'function') { onClick(event) }
  }

  // generate the theme depending on the boolean inputs or the theme input
  const wrapped_className = [styles.action_button, className ? className : ""].join(" ")

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

  // generate the component style theme
  const rgbMain = Color2Vec(current_theme.color1)

  return (
    <StyledButton
      // custom style props
      buttonIsActive={isPressed}
      textColor={current_theme.textColor2}
      rgbMainButtonColor={rgbMain}

      //hierarchy props
      className={wrapped_className}
      style={style}

      //functional
      onClick={wrapped_onClick}
    >
      {children}
    </StyledButton>
  )
}




export default VButton