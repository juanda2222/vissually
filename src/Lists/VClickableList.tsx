import React, { useContext } from 'react'
import styled  from 'styled-components';

import styles from './VClickableList.module.css'
import { Color2Vec } from "../Tools/ColorTools"
import { DefaultThemes, ThemeContext } from "../ThemeProvider/ThemeProvider"


// style the container
const StyledContainer = styled("div")<{borderColor:string}>`
  border: 0.5px solid ${props => props.borderColor};
`;

// style the selectable item:
const StyledItem = styled("div") < { text_color: string, rgbBackgroundColor: number[] }>`
  
  color: ${props => props.text_color};
  background: ${ props => `rgba(${props.rgbBackgroundColor[0] - 20}, ${props.rgbBackgroundColor[1] - 20}, ${props.rgbBackgroundColor[2] - 20}, 0.9)`};
  &:hover{
    background: ${ props => `rgba(${props.rgbBackgroundColor[0] - 40}, ${props.rgbBackgroundColor[1] - 40}, ${props.rgbBackgroundColor[2] - 40}, 0.9)`};
  };
  &:active{
    background: ${ props => `rgba(${props.rgbBackgroundColor[0] - 60}, ${props.rgbBackgroundColor[1] - 60}, ${props.rgbBackgroundColor[2] - 60}, 0.9)`};
  }
`;

const StyledTopItem = styled(StyledItem)`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
const StyledBottomItem = styled(StyledItem)`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
    
const VClickableList: React.FunctionComponent<ListProps> = ({
  //styling properties
  className,
  style,
  theme,
  primary, secondary, primaryDark, secondaryDark,
  containerClassName,

  //functional properties
  list,
  getLabel,
  onClick,
}) => {

  // get the theme from the context
  const context_theme = useContext(ThemeContext);
  const wrappedClassName = [styles.list_item, className ? className : ""].join(" ")
  const wrappedContainerClassName = [styles.list_container, containerClassName].join(" ")

  // generate the theme depending on the boolean inputs or the theme input
  let current_theme: Theme;
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
  const rgbThemeBackgroundColor = Color2Vec(current_theme.backgroundColor1)
  

  // style the children:
  const wrapped_list = list ? list : []
  const DivList = wrapped_list.map((item, index) => {

    let label = ""
    // depending on the list structure get the label:
    if (typeof getLabel === 'function') {
      label = getLabel(item)
      // a plain text list:
    } else {
      label = item
    }


    const item_props = {
      //custom theme:
      text_color: current_theme.textColor1,
      rgbBackgroundColor: rgbThemeBackgroundColor,
      //styling
      className: wrappedClassName,
      style: style,
      //function:
      key: label,
      onClick: () => { onClick && onClick({ index: index, label: label }) },
    }

    // top item
    if (index == 0) {
      return <StyledTopItem {...item_props} >{label}</StyledTopItem>
      // bottom item
    } else if (index == list.length - 1) {
      return <StyledBottomItem {...item_props} >{label}</StyledBottomItem>
      //middle items:
    } else {
      return <StyledItem {...item_props} >{label}</StyledItem>
    }
  })


  return (
    wrapped_list.length > 0 ? (
      <StyledContainer
        borderColor={current_theme.color1}
        className={wrappedContainerClassName}
      >
        {DivList}
      </StyledContainer>
    ): null
  )
}


export default VClickableList