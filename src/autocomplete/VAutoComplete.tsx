import React, {
  useState,
  //useContext,
  //useEffect,
  //useRef,

} from 'react'


import styles from './VAutoComplete.module.css'
//import { DefaultThemes, ThemeContext } from "../ThemeProvider/ThemeProvider"

import VClickableList from "../Lists/VClickableList"


const VAutoComplete: React.FunctionComponent<AutoCompleteProps> = ({
  //style properties
  className,
  //functional properties
  id,
  options,
  getOptionLabel,
  style,
  renderInput,
  onChange,
  value,

}) => {

  // hooks and state:
  const [isOpen, setOpen] = useState(true)
  const [selectedItem, setSelectedItem] = useState("")
  const doubleBinded = typeof onChange === 'function' && value ? true : false

  // create all the wrappers for the inputs
  const wrapped_list_className = [
    styles.list_style,
    isOpen ? styles.fadeIn : styles.fadeOut,
    className ? className : ""
  ].join(" ")

  // wrapp the rendered element with a two way binding
  const WrappedInputComponent:React.ReactElement<InputProps> = React.cloneElement(
    renderInput as React.ReactElement<any>,
    {
      id:id,
      vale: doubleBinded ? selectedItem : value,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedItem(e.target.value)
        onChange && onChange(e)
      },
    }
  )

  return (
    <div
      className={styles.big_container}
    >
      {WrappedInputComponent}
      <VClickableList
        style={style}
        className={styles.list_item}
        list={options}
        getLabel={getOptionLabel}
        
        containerClassName={wrapped_list_className}
        onClick={(e) => {
          setOpen(false)
          setSelectedItem(e.label)
        }}
      />
    </div>
  )
}


export default VAutoComplete