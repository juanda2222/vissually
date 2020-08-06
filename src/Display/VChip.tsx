import React, { useContext } from 'react'
import styled  from 'styled-components';

import styles from './VChip.module.css'
import { Color2Vec } from "../Tools/ColorTools"
import { DefaultThemes, ThemeContext } from "../ThemeProvider/ThemeProvider"
import XSymbol from "../assets/x-symbol"

// style the container
const StyledContainer = styled("div")<{background_color:string, hover_background_color:string}>`
  background-color: ${props => props.background_color};
  &:hover{
    background-color: ${props => props.hover_background_color};  
  } 
  `;

    
const StyledCancelButton = styled("div") <{
  background_color: string,
  hover_background_color: string,
  text_color: string
}>`
  background-color: ${props => props.background_color};
  text-color: ${props => props.text_color};
  &:hover{
    background-color: ${props => props.hover_background_color};  
  }
`;

const VChip: React.FunctionComponent<ChipProps> = ({
  //styling properties
  className,
  style,
  theme,
  primary, secundary, dark,

  //functional properties
  label,
  onDelete,
  onClick,
}) => {

  // get the theme from the context
  const contex_theme = useContext(ThemeContext);
  const wrapped_className = [styles.container, className ? className : ""].join(" ")

  // generat the theme depending on the boolean inputs or the theme input
  var current_theme:Theme;
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
  const rgb_list = Color2Vec(current_theme.backgroundColor1)

  return StyledContainer ? (
    <StyledContainer
      background_color={`rgb(${rgb_list[0] - 20}, ${rgb_list[1] - 20}, ${rgb_list[2] - 20})`}
      hover_background_color={`rgb(${rgb_list[0] - 10}, ${rgb_list[1] - 10}, ${rgb_list[2] - 10})`}
      className={wrapped_className}
      style={style}
      onClick={onClick}
    >
      <span>{label}</span>
      {
        onDelete &&
        <StyledCancelButton
          background_color={`rgb(${rgb_list[0] - 40}, ${rgb_list[1] - 40}, ${rgb_list[2] - 40})`}
          hover_background_color={`rgb(${rgb_list[0] - 30}, ${rgb_list[1] - 30}, ${rgb_list[2] - 30})`}
          text_color={current_theme.textColor1}
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
      }
    </StyledContainer>
  ):null
}


export default VChip