import React, { useContext } from 'react'
import styled  from 'styled-components';

import styles from './VClickableList.module.css'
import { Color2Vec } from "../Tools/ColorTools"
import { DefaultThemes, ThemeContext } from "../ThemeProvider/ThemeProvider"


// style the container
const StyledContainer = styled("div")<{border_color:string}>`
  border: 0.5px solid ${props => props.border_color};`;

// style the selectable item:
var StyledItem = styled("div") < { text_color: string, main_rgb: number[] }>`
      
  color: ${props => props.text_color};
  background: ${ props => `rgba(${props.main_rgb[0] - 20}, ${props.main_rgb[1] - 20}, ${props.main_rgb[2] - 20}, 0.9)`};
  &:hover{
    background: ${ props => `rgba(${props.main_rgb[0] - 40}, ${props.main_rgb[1] - 40}, ${props.main_rgb[2] - 40}, 0.9)`};
  };
  &:active{
    background: ${ props => `rgba(${props.main_rgb[0] - 60}, ${props.main_rgb[1] - 60}, ${props.main_rgb[2] - 60}, 0.9)`};
  }
`;
    
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
  
  
  // style the childs:
  const div_list = (list ? list : []).map((item_text, index) => {

    return (
      <StyledItem
        //custom theme:
        text_color={current_theme.textColor1}
        main_rgb={rgb_list}
        //styling
        className={wrapped_className}
        style={style}
        //function:
        key={index}
        onClick={() => { onClick && onClick(index, item_text) }}
      >
        {item_text}
      </StyledItem>
    )   
  })

  return StyledContainer ? (
    <StyledContainer
      border_color={current_theme.color1}
      className={wrapped_container_className}
    >
      {div_list}  
    </StyledContainer>
  ):null
}


export default VClickableList