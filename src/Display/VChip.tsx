import React, { useContext } from 'react'
import styled  from 'styled-components';

import styles from './VChip.module.css'
import { Color2Vec } from "../Tools/ColorTools"
import { DefaultThemes, ThemeContext } from "../ThemeProvider/ThemeProvider"
import XSymbol from "../assets/x-symbol"

// style the container
const StyledContainer = styled("div")<{backgroundColor:string, hoverBackgroundColor:string}>`
  background-color: ${props => props.backgroundColor};
  &:hover{
    background-color: ${props => props.hoverBackgroundColor};  
  } 
  `;

    
const StyledCancelButton = styled("div") <{
  backgroundColor: string,
  hoverBackgroundColor: string,
  textColor: string
}>`
  background-color: ${props => props.backgroundColor};
  text-color: ${props => props.textColor};
  &:hover{
    background-color: ${props => props.hoverBackgroundColor};  
  }
`;

const VChip: React.FunctionComponent<ChipProps> = ({
  //styling properties
  className,
  style,
  theme,
  primary, secondary, primaryDark, secondaryDark,

  //functional properties
  label,
  onDelete,
  onClick,
}) => {

  // get the theme from the context
  const context_theme = useContext(ThemeContext);
  const wrapped_className = [styles.container, className ? className : ""].join(" ")

  // generate the theme depending on the boolean inputs or the theme input
  var current_theme:Theme;
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
  const rgb_list = Color2Vec(current_theme.backgroundColor1)

  return StyledContainer ? (
    <StyledContainer
      backgroundColor={`rgb(${rgb_list[0] - 20}, ${rgb_list[1] - 20}, ${rgb_list[2] - 20})`}
      hoverBackgroundColor={`rgb(${rgb_list[0] - 10}, ${rgb_list[1] - 10}, ${rgb_list[2] - 10})`}
      className={wrapped_className}
      style={style}
      onClick={onClick}
    >
      <span>{label}</span>
      {
        onDelete && (
          <StyledCancelButton
            backgroundColor={`rgb(${rgb_list[0] - 40}, ${rgb_list[1] - 40}, ${rgb_list[2] - 40})`}
            hoverBackgroundColor={`rgb(${rgb_list[0] - 30}, ${rgb_list[1] - 30}, ${rgb_list[2] - 30})`}
            textColor={current_theme.textColor1}
            className={styles.delete_button}
            onClick={(e) => {
              e.stopPropagation(); 
              onDelete && onDelete(e)
            }}
          >
            <XSymbol style={{
              fill: current_theme.textColor1,
              width: "0.6em", height: "0.6em",
              margin: "auto 6px"
            }} />
          </StyledCancelButton>
        )
      }
    </StyledContainer>
  ):null
}


export default VChip