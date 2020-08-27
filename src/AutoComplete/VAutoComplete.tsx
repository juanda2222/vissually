import React, {
  useState,
  //useContext
} from 'react'


import styles from './VAutoComplete.module.css'
import VClickableList from "../Lists/VClickableList"
import VChipList from "../lists/VChipList"


const VAutoComplete: React.FunctionComponent<AutoCompleteProps> = ({
  //style properties
  primary, secondary, primaryDark, secondaryDark,
  className,
  style,
  //functional properties
  multiple,
  options,
  getOptionLabel,
  renderInput,
  onChange,
  value,
  onFocus,
  onBlur,
}) => {

  // hooks and state:
  const [listIsOpen, setListOpen] = useState(false)
  const [inputText, setInputText] = useState("")
  const isDoubleBinded = typeof onChange === 'function' && value ? true : false
  const [selectedList, setSelectedList] = useState([] as string[])

  //generate a dynamic list depending on the state
  const wrappedOptions = options ? options : [] as string[]
  const filteredList = wrappedOptions.filter( (item:any) => { 
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
  const wrappedListClassName = [
    styles.list_style,
    listIsOpen ? styles.fadeIn : styles.fadeOut,
    className ? className : ""
  ].join(" ")

  // wrapped the rendered element with a two way binding
  const inputComponentProps = {
    primary, secondary, primaryDark, secondaryDark,
    className: styles.input_style,
    value: isDoubleBinded ? value : inputText,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value)
      onChange && onChange(e)
    },

    // add the close and open interaction when the input is focused
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
      setListOpen(true)
      if (typeof onFocus === 'function') {onFocus(e)}
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
      setListOpen(false)

      // clear if the text has no option
      if (filteredList.length < 1) { setInputText("") } 
      if (typeof onBlur === 'function') {onBlur(e)}
    },
  }

  return (
    <div
      className={styles.big_container}
    >
      
      {// render a list if multiple selection
        multiple ? (
          <VChipList
            list={selectedList}
            onDelete={(obj) => {

              //delete the item from the list
              setSelectedList(selectedList.filter(label => label !== obj.label));
              
            }}
          />
        ) : null
      }
      {typeof renderInput === 'function' && renderInput(inputComponentProps)}
      <VClickableList
        style={style}
        list={filteredList}
        getLabel={getOptionLabel}
        containerClassName={wrappedListClassName}
        onClick={(obj) => {

          setListOpen(false)
          
          // add to list if multiple selections is on
          if (multiple) {
            setSelectedList([...selectedList, obj.label])
            setInputText("")  
          } else {
            setInputText(obj.label)
          }
        }}
      />
    </div>
  )
}


export default VAutoComplete