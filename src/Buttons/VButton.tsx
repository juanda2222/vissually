import React, {
  useContext,
  //useState
} from 'react'


import styles from './VButton.module.css'
import styled, { } from 'styled-components';
import { Color2Vec } from "../Tools/ColorTools"
import { DefaultThemes, ThemeContext } from "../ThemeProvider/ThemeProvider"


const StyledButton = styled("div")<{isActive?:boolean, text_color:string, main_rgb: number[]}>`

    color: ${props => props.text_color};
    background-color: ${props => `rgb(${props.main_rgb[0]}, ${props.main_rgb[1]}, ${props.main_rgb[2]})`};
    border-bottom: 5px solid ${props => `rgb(${props.main_rgb[0] - 40}, ${props.main_rgb[1] - 40}, ${props.main_rgb[2] - 40})`};

    ${props => props.isActive ? `
      margin: 14px auto 7px auto;
      transform: translate(0px,5px);
      -webkit-transform: translate(0px,5px);
      border-bottom: 1px solid;
      border-color: transparent;
    `: ""}
    ${props => props.isActive ? "": `&:hover{
      background-color: rgb(${props.main_rgb[0] + 20}, ${props.main_rgb[1] + 20}, ${props.main_rgb[2] + 20});
      border-bottom: 5px solid rgb(${props.main_rgb[0] - 20}, ${props.main_rgb[1] - 20}, ${props.main_rgb[2] - 20});
    }`}
    
    &:active{
      margin: 14px auto 7px auto;
      transform: translate(0px,5px);
      -webkit-transform: translate(0px,5px);
      border-bottom: 1px solid;
      border-color: transparent;
    }
  `

const VButton: React.FunctionComponent<ButtonProps> = ({
  //styling properties
  className,
  style,
  theme,
  primary, secundary, dark,

  //functional properties
  isPressed,
  children,
  onClick,
}) => {  

  // get the theme from the context and its hooks
  const contex_theme: Theme = useContext(ThemeContext);


  // all the event handlers wrapped for custom styling
  const wrapped_onClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (typeof onClick === 'function') { onClick(event) }
  }

  // generate the theme depending on the boolean inputs or the theme input
  const wrapped_className = [styles.action_button, className ? className : ""].join(" ")
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

  // generate the component style theme
  const main_rgb = Color2Vec(current_theme.color1)

  return (
    <StyledButton
      // custom style props
      isActive={isPressed}
      text_color={current_theme.textColor2}
      main_rgb={main_rgb}

      //hierachy props
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