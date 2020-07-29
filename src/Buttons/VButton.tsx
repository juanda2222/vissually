import * as React from 'react'

import styles from './VButton.module.css'
import styled from 'styled-components';
import { Color2Vec } from "../Tools/ColorTools"

const wrapped_onClick = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined
) => {
  console.log(event)
  if (typeof onClick === 'function') { onClick(event) }
}

const VButton = ({
  children,
  className,
  theme,
  style,
  onClick
}: ButtonProps) => {


  const wrapped_className = [styles.action_button, styles.animate, className].join(" ")
  var StyledButton;

  // customize the style if a style is given
  if (!( typeof(theme) == "undefined")) {

    const main_rgb = Color2Vec(theme.primary.color1)
    //const secundary_rgb = Color2Vec(theme.primary.color2)

    StyledButton = styled.div`
      color: rgb(255, 255, 255);
      background-color: ${main_rgb};
      border-bottom: 5px solid rgb(${main_rgb[0] - 40}, ${main_rgb[1] - 40}, ${main_rgb[2] - 40});
      &:hover{
        background-color: rgb(${main_rgb[0] + 20}, ${main_rgb[1] + 20}, ${main_rgb[2] + 20});
        border-bottom: 5px solid rgb(${main_rgb[0] - 20}, ${main_rgb[1] - 20}, ${main_rgb[2] - 20});
      }
      &:active{
        margin: 14px 20px 2px 5px;
        transform: translate(0px,5px);
        -webkit-transform: translate(0px,5px);
        border-bottom: 1px solid;
        border-color: transparent;
      }
    `;
  } else {

    StyledButton = styled.div`
    color: rgb(255, 255, 255);
    background-color: #146E8E;
    border-bottom: 5px solid #0C445C;
    &:hover{
      background-color: #135b75;
      border-bottom: 5px solid #0a2531;
    }
    &:active{
      margin: 14px 20px 2px 5px;
      transform: translate(0px,5px);
      -webkit-transform: translate(0px,5px);
      border-bottom: 1px solid;
      border-color: transparent;
    }
    `
  }

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
  theme: {
    primary: {
      textColor1: "#ffffff",
      textColor2: "#ffffff",
      color1: "#146E8E",
      color2: "#146E8E",
      backgroundColor1: "#ffffff",
      backgroundColor2: "#ffffff",
    }
  }
};


export default VButton