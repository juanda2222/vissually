import React, {
  useState,
  //useContext

} from 'react'


import styles from './VAutoComplete.module.css'
import VClickableList from "../Lists/VClickableList"


const VAutoComplete: React.FunctionComponent<AutoCompleteProps> = ({
  //style properties
  className,
  style,
  //functional properties
  options,
  getOptionLabel,
  renderInput,
  onChange,
  value,
  onFocus,
  onBlur,
}) => {

  // hooks and state:
  const [isOpen, setOpen] = useState(false)
  const [inputText, setInputText] = useState("")
  const doubleBinded = typeof onChange === 'function' && value ? true : false

  //generate a dynamic list depending on the state
  const wrapped_options = options ? options : []
  const filtered_list = wrapped_options.filter( (item:any) => { 
    let label = ""
    // depending on the list structure get the label:
    if (typeof getOptionLabel === 'function') {
      label = getOptionLabel(item)
    // a plain text list:
    } else {
      label = item
    }

    // filter by content:
    return (label.toLowerCase().includes(inputText.toLowerCase()) || inputText=="")
  })

  // create all the wrappers for the inputs
  const wrapped_list_className = [
    styles.list_style,
    isOpen ? styles.fadeIn : styles.fadeOut,
    className ? className : ""
  ].join(" ")

  // wrapp the rendered element with a two way binding
  const input_component_props = {
    className: styles.input_style,
    value: doubleBinded ? value : inputText,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value)
      onChange && onChange(e)
    },

    // add the close and oppen interaction when the input is focused
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
      setOpen(true)
      if (typeof onFocus === 'function') {onFocus(e)}
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
      setOpen(false)
      if (filtered_list.length < 1) { setInputText("") }
      if (typeof onBlur === 'function') {onBlur(e)}
    },
  }

  return (
    <div
      className={styles.big_container}
    >
      {typeof renderInput === 'function' && renderInput(input_component_props)}
      <VClickableList
        style={style}
        className={styles.list_item}
        list={filtered_list}
        getLabel={getOptionLabel}
        containerClassName={wrapped_list_className}
        onClick={(obj) => {
          setOpen(false)
          setInputText(obj.label)
        }}
      />
    </div>
  )
}


export default VAutoComplete