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
  const [selectedItem, setSelectedItem] = useState("")
  const doubleBinded = typeof onChange === 'function' && value ? true : false

  // create all the wrappers for the inputs
  const wrapped_list_className = [
    styles.list_style,
    isOpen ? styles.fadeIn : styles.fadeOut,
    className ? className : ""
  ].join(" ")

  // wrapp the rendered element with a two way binding
  const input_component_props = {
    value: doubleBinded ? value : selectedItem,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedItem(e.target.value)
      onChange && onChange(e)
    },

    // add the close and oppen interaction when the input is focused
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
      setOpen(true)
      if (typeof onFocus === 'function') {onFocus(e)}
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
      setOpen(false)
      if (typeof onBlur === 'function') {onBlur(e)}
    },
  }
  

  return (
    <div
      className={styles.big_container}
    >
      {renderInput(input_component_props)}
      <VClickableList
        style={style}
        className={styles.list_item}
        list={options}
        getLabel={getOptionLabel}
        containerClassName={wrapped_list_className}
        onClick={(obj) => {
          setOpen(false)
          setSelectedItem(obj.label)
        }}
      />
    </div>
  )
}


export default VAutoComplete