import React, { useContext, useState, useEffect, useRef } from 'react'


import styles from './VAutoComplete.module.css'
import { DefaultThemes, ThemeContext } from "../ThemeProvider/ThemeProvider"
import VButton from "../Buttons/VButton"
import VClickableList from "../Lists/VClickableList"
import ArrowDownSVG from "../assets/arrow-down.js"
import ArrowUpSVG from "../assets/arrow-up.js"


const VAuto: React.FunctionComponent<AutoCompleteProps> = ({
  //functional properties
  id,
  options,
  getOptionLabel,
  style,
  renderInput,

}) => {

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