import * as React from 'react'

import styles from './VButton.module.css'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Color2Vec } from "../Tools/ColorTools"

const wrapped_onClick = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined
) => {
  console.log(event)
  if (typeof onClick === 'function') { onClick(event) }
}

const VButton = (props: ButtonProps) => {

  // get the usable properties
  const {
    children,
    className,
    theme,
    onClick
  } = props


  const wrapped_className = [styles.action_button, styles.animate, className].join(" ")
  var StyledButton;

  // customize the style if a style is given
  if (!( typeof(theme) == "undefined")) {

    const mainColor = theme.primary.color1
    const rgb_list = Color2Vec(mainColor)

    StyledButton = styled.div`
      color: rgb(255, 255, 255);
      background-color: ${mainColor};
      border-bottom: 5px solid rgb(${rgb_list[0] - 40}, ${rgb_list[1] - 40}, ${rgb_list[2] - 40});
      &:hover{
        background-color: rgb(${rgb_list[0] + 20}, ${rgb_list[1] + 20}, ${rgb_list[2] + 20});
        border-bottom: 5px solid rgb(${rgb_list[0] - 20}, ${rgb_list[1] - 20}, ${rgb_list[2] - 20});
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
    >
      {children}
    </StyledButton>
  )
}


VButton.propTypes = {
  items: PropTypes.array,
};

VButton.defaultProps = {
  items: [],
};


export default VButton