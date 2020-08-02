import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components';

import styles from './VSelect.module.css'
import { DefaultThemes } from "../ThemeProvider/ThemeProvider"
import VButton from "../Buttons/VButton"
import VClickableList from "../Lists/VClickableList"


const VSelect: React.FunctionComponent < SelectProps > = ({
  //styling properties
  className,
  style,
  theme,
  primary, secundary, dark,
  //listClassName,

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
  //const wrapped_list_className = [styles.list_style, listClassName].join(" ")

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
        {isOpen ? <img 
            src="./assets/arrow-down.svg" 
            alt=""
            height="20"
            width="20"
          />: <img 
            src="./assets/arrow-up.svg" 
            alt=""
            height="20"
            width="20"
          />}
        
      </VButton>
      {isOpen ? <VClickableList
        list={list}
        onClick={(index, value) => {
          setOpen(false)
          onChange && onChange(index, value)
        }}
      /> :
        null
      }
      <img 
        src="./assets/arrow-down.svg" 
        alt=""
        height="20"
        width="20"
        />
    </div>
  )
}


export default VSelect