import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components';

import styles from './VSelect.module.css'
import { DefaultThemes } from "../ThemeProvider/ThemeProvider"
import VButton from "../Buttons/VButton"
import VClickableList from "../Lists/VClickableList"
import ArrowDownSVG from "../assets/arrow-down.js" 
import ArrowUpSVG from "../assets/arrow-up.js" 


const VSelect: React.FunctionComponent < SelectProps > = ({
  //styling properties
  className,
  style,
  theme,
  primary, secundary, dark,
  listClassName,

  //functional properties
  list,
  onChange,
  label,
}) => {  

  const [isOpen, setOpen] = useState(false)
  //const [selectedItem, setSelectedItem] = useState("")


  // get the theme from the context
  const contex_theme: Theme = useContext(ThemeContext);
  const wrapped_className = [styles.button_style, className ? className : ""].join(" ")
  const wrapped_list_className = [
    styles.list_style,
    isOpen ? styles.fadeIn : styles.fadeOut,
    listClassName ? listClassName : ""
  ].join(" ")

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

  return (
    <div className={styles.big_container}>
      <VButton
        style={style}
        className={wrapped_className}
        theme={current_theme}
        onClick={() => { 
          setOpen(!isOpen)
        }}
      >
        {label}
        {isOpen ?
          <ArrowUpSVG style={{
            fill: current_theme.textColor2,
            width: "6%", height: "6%",
            margin: "auto 4px"
          }}/> :
          <ArrowDownSVG style={{
            fill: current_theme.textColor2,
            width: "6%", height: "6%",
            margin: "auto 4px"
          }}/>
        }
        
      </VButton>
      <VClickableList
        list={list}
        containerClassName={wrapped_list_className }
        onClick={(index, value) => {
          setOpen(false)
          onChange && onChange(index, value)
        }}
      />
    </div>
  )
}


export default VSelect