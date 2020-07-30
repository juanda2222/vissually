import React, { useContext } from 'react'


import styles from './VButton.module.css'
import styled, { ThemeContext } from 'styled-components';
import { Color2Vec } from "../Tools/ColorTools"

const wrapped_onClick = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined
) => {
  if (typeof onClick === 'function') { onClick(event) }
}

const VButton:React.SFC<ButtonProps> = ({
  children,
  className,
  style,
  theme,
  onClick
}) => {  

  const wrapped_className = [styles.action_button, styles.animate, className].join(" ")
  const contex_theme = useContext(ThemeContext);
  
  var button_theme;

  // use theme if a style is given
  if (!(typeof (contex_theme) == "undefined")) {
    button_theme = contex_theme
  } else {
    button_theme = theme
  }
  console.debug("Context received: ", button_theme)
  
  const main_rgb = Color2Vec(button_theme.color1)

  const StyledButton = styled.div`
    color: rgb(255, 255, 255);
    background-color: rgb(${main_rgb[0]}, ${main_rgb[1]}, ${main_rgb[2]});
    border-bottom: 5px solid rgb(${main_rgb[0] - 40}, ${main_rgb[1] - 40}, ${main_rgb[2] - 40});

    &:hover{
      background-color: rgb(${main_rgb[0] + 20}, ${main_rgb[1] + 20}, ${main_rgb[2] + 20});
      border-bottom: 5px solid rgb(${main_rgb[0] - 20}, ${main_rgb[1] - 20}, ${main_rgb[2] - 20});
    }
    &:active{
      margin: 14px 5px 2px 5px;
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



VButton.defaultProps = {
  className:"",
  theme: {
    textColor1: "#ffffff",
    textColor2: "#ffffff",
    color1: "#135b75",
    color2: "#135b75",
    backgroundColor1: "#ffffff",
    backgroundColor2: "#ffffff",
  }

};


export default VButton