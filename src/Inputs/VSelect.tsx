import React, { useContext, useState, useEffect, useRef } from 'react'


import styles from './VSelect.module.css'
import { DefaultThemes, ThemeContext } from "../ThemeProvider/ThemeProvider"
import VButton from "../Buttons/VButton"
import VClickableList from "../Lists/VClickableList"
import ArrowDownSVG from "../assets/arrow-down.js"
import ArrowUpSVG from "../assets/arrow-up.js"


function VSelect ({
  //styling properties
  className,
  style,
  theme,
  primary, secondary, primaryDark, secondaryDark,
  listClassName,

  //functional properties
  list,
  onSelect,
  label,
}: SelectProps ){

  const [isListOpen, setListOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState("")

  // get the theme from the context
  const context_theme = useContext(ThemeContext);
  const wrappedClassName = [styles.button_style, className ? className : ""].join(" ")
  const wrappedListClassName = [
    styles.list_style,
    isListOpen ? styles.fadeIn : styles.fadeOut,
    listClassName ? listClassName : ""
  ].join(" ")

  // generate the theme depending on the boolean inputs or the theme input
  let current_theme:DefaultTheme;
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
    current_theme = {
      ...DefaultThemes.primary,
      ...(theme && theme)
    } 
  }

  // use effect to subscribe the outside click element
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {

    // on outside click handler
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setListOpen(false)
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
        primary={primary}
        secondary={secondary}
        primaryDark={primaryDark}
        secondaryDark={secondaryDark}
        isPressed={isListOpen}
        style={style}
        className={wrappedClassName}
        theme={current_theme}
        onClick={() => {
          setListOpen(!isListOpen)
        }}
      >
        {selectedItem == "" ? label : selectedItem}
        {isListOpen ? (
          <ArrowUpSVG style={{
            fill: current_theme.textColor2,
            width: "0.7em", height: "0.7em",
            margin: "auto 6px"
          }} />
        ):(
          <ArrowDownSVG style={{
            fill: current_theme.textColor2,
            width: "0.7em", height: "0.7em",
            margin: "auto 6px"
          }} />     
        )}
      </VButton>
      <VClickableList
        list={list}
        className={styles.list_item}
        containerClassName={wrappedListClassName}
        onClick={({ index, label }) => {
          setListOpen(false)
          setSelectedItem(label)
          onSelect && onSelect(index, label)
        }}
      />
    </div>
  )
}


export default VSelect