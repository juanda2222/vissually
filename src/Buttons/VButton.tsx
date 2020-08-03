import React, { useContext } from 'react'


import styles from './VButton.module.css'
import styled, { ThemeContext } from 'styled-components';
import { Color2Vec } from "../Tools/ColorTools"
import { DefaultThemes } from "../ThemeProvider/ThemeProvider"


const wrapped_onClick = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined
) => {
  if (typeof onClick === 'function') { onClick(event) }
}

const VButton:React.SFC<ButtonProps> = ({
  //styling properties
  className,
  style,
  theme,
  primary, secundary, dark,

  //functional properties
  children,
  onClick
}) => {  

  // get the theme from the context
  const contex_theme: Theme = useContext(ThemeContext);
  const wrapped_className = [styles.action_button, className ? className: ""].join(" ")
  
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
  const main_rgb = Color2Vec(current_theme.color1)
  const StyledButton = styled.div`
    color: ${current_theme.textColor2};
    background-color: rgb(${main_rgb[0]}, ${main_rgb[1]}, ${main_rgb[2]});
    border-bottom: 5px solid rgb(${main_rgb[0] - 40}, ${main_rgb[1] - 40}, ${main_rgb[2] - 40});

    &:hover{
      background-color: rgb(${main_rgb[0] + 20}, ${main_rgb[1] + 20}, ${main_rgb[2] + 20});
      border-bottom: 5px solid rgb(${main_rgb[0] - 20}, ${main_rgb[1] - 20}, ${main_rgb[2] - 20});
    }
    &:active{
      margin: 14px 5px 7px 5px;
      transform: translate(0px,5px);
      -webkit-transform: translate(0px,5px);
      border-bottom: 1px solid;
      border-color: transparent;
    }
  `


  return (
    <StyledButton
      onClick={(event) => { wrapped_onClick(event, onClick) }}
      className={wrapped_className}
      style={style}
    >
      {children}
    </StyledButton>
  )
}




export default VButton