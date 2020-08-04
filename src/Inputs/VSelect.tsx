import React, { useContext, useState, useEffect, useRef } from 'react'


import styles from './VSelect.module.css'
import { DefaultThemes, ThemeContext } from "../ThemeProvider/ThemeProvider"
import VButton from "../Buttons/VButton"
import VClickableList from "../Lists/VClickableList"
import ArrowDownSVG from "../assets/arrow-down.js"
import ArrowUpSVG from "../assets/arrow-up.js"


const VSelect: React.FunctionComponent<SelectProps> = ({
  //styling properties
  className,
  style,
  theme,
  primary, secundary, dark,
  listClassName,

  //functional properties
  list,
  onSelect,
  label,
}) => {

  const [isOpen, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState("")


  // get the theme from the context
  const contex_theme: Theme = useContext(ThemeContext);
  const wrapped_className = [styles.button_style, className ? className : ""].join(" ")
  const wrapped_list_className = [
    styles.list_style,
    isOpen ? styles.fadeIn : styles.fadeOut,
    listClassName ? listClassName : ""
  ].join(" ")

  // generate the theme depending on the boolean inputs or the theme input
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

  // use effect to subscribe the outside click element
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {

    // on outside click handler
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    // cleanup:
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      className={styles.big_container}>
      <VButton
        isPressed={isOpen}
        style={style}
        className={wrapped_className}
        theme={current_theme}
        onClick={() => {
          setOpen(!isOpen)
        }}
      >
        
        {selectedItem == "" ? label : selectedItem}
        
        {isOpen ?
          <ArrowUpSVG style={{
            fill: current_theme.textColor2,
            width: "0.7em", height: "0.7em",
            margin: "auto 6px"
          }} /> :
          <ArrowDownSVG style={{
            fill: current_theme.textColor2,
            width: "0.7em", height: "0.7em",
            margin: "auto 6px"
          }} />
        }

      </VButton>
      <VClickableList
        list={list}
        className={styles.list_item}
        containerClassName={wrapped_list_className}
        onClick={(index, value) => {
          setOpen(false)
          setSelectedItem(value)
          onSelect && onSelect(index, value)
        }}
      />
    </div>
  )
}


export default VSelect