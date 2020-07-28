import * as React from 'react'

import styles from './VButton.module.css'
import styled from 'styled-components';

const wrapped_onClick = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined
) => {
  console.log(event)
  if (typeof  onClick === 'function') { onClick(event) }
}

export default (props: ButtonProps ) => {
  
  const { 
    children,
    className,
    theme,
    onClick
  } = props
  const wrapped_className = [styles.action_button, styles.animate, className].join(" ")

  const StyledButton = theme
  ? styled.div`

  ` : styled.div`
    color: #494949;
    background-color: #146E8E;
    border-bottom: 5px solid #0C445C;
    &:hover{
      background-color: #135b75;
      border-bottom: 5px solid #0a2531;
    }
  `;

  return (
    <StyledButton
      onClick={(event) => { wrapped_onClick(event, onClick) }}
      className={wrapped_className}
    >
      {children}
    </StyledButton>
  )
}
