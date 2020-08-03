import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components';

import styles from './VClickableList.module.css'
import { Color2Vec } from "../Tools/ColorTools"
import { DefaultThemes } from "../ThemeProvider/ThemeProvider"

const VClickableList: React.FunctionComponent<ListProps> = ({
  //styling properties
  className,
  style,
  theme,
  primary, secundary, dark,
  containerClassName,

  //functional properties
  list,
  onClick,
}) => {  

  // get the theme from the context
  const contex_theme = useContext(ThemeContext);
  const wrapped_className = [styles.list_item, className ? className : ""].join(" ")
  const wrapped_container_className = [styles.list_container, containerClassName].join(" ")

  // generat the theme depending on the boolean inputs or the theme input
  var current_theme: Theme;
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
  
  // style the container
  var StyledContainer = styled.div`
      border: 0.5px solid ${current_theme.color1};
    `;
  
  // style the childs:
  const div_list = (list ? list : []).map((item_text, index) => {

    var StyledItem = styled.div`
      
      color: ${current_theme.textColor1};
      background: rgba(${rgb_list[0] - 20}, ${rgb_list[1] - 20}, ${rgb_list[2] - 20}, 0.5);
      &:hover{
        background: rgba(${rgb_list[0] - 40}, ${rgb_list[1] - 40}, ${rgb_list[2] - 40}, 0.5);
      };
      &:active{
        background: rgba(${rgb_list[0] - 60}, ${rgb_list[1] - 60}, ${rgb_list[2] - 60}, 0.5);
      }
    `;
    return (
      <StyledItem
        className={wrapped_className}
        style={style}
        key={index}
        onClick={() => { onClick && onClick(index, item_text) }}
      >
        {item_text}
      </StyledItem>
    )
  })

  return (
    <StyledContainer
      className={wrapped_container_className}
    >
      {div_list}  
    </StyledContainer>
  )
}


export default VClickableList