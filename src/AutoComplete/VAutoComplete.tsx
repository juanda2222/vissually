import React, {
  useState,
  //useContext
} from 'react'


import styles from './VAutoComplete.module.css'
import VClickableList from "../Lists/VClickableList"
import VChip from "../Display/VChip"


const DisplayList: React.FunctionComponent<ChipListProps> = ({
  //functional
  onDelete,
  onClick,
  getListLabel,
  list,
}) => {

  // style the children:
  const wrapped_list = list ? list : []
  const list_component =  wrapped_list.map((item, index) => {

    let label = ""
    // depending on the list structure get the label:
    if (typeof getListLabel === 'function') {
      label = getListLabel(item)
      // a plain text list:
    } else {
      label = item
    }

    return (
      <VChip
        style={{margin:"2px"}}
        key={index}
        label={label}
        onCLick={() => {
          if (typeof onClick == "function") { onClick({ label: label, index: index }) }
        }}
        onDelete={() => {
          if (typeof onDelete == "function") { onDelete({ label: label, index: index }) }
        }}
      />
    )
  })

  return (
    <div
      style={{
        flex:1,
        display: "flex",
        flexWrap: "wrap",
        justifyContent:"center",
        alignItems: "flex-start",
      }}
    >
    {list_component}
  </div>)
}

const VAutoComplete: React.FunctionComponent<AutoCompleteProps> = ({
  //style properties
  primary, secundary, dark,
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
  const [isOpen, setOpen] = useState(false)
  const [inputText, setInputText] = useState("")
  const isDoubleBinded = typeof onChange === 'function' && value ? true : false
  const [SelectedList, setSelectedList] = useState([] as string[])

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

  // wrapped the rendered element with a two way binding
  const input_component_props = {
    primary:primary, secundary:secundary, dark:dark,
    className: styles.input_style,
    value: isDoubleBinded ? value : inputText,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value)
      onChange && onChange(e)
    },

    // add the close and open interaction when the input is focused
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
      setOpen(true)
      if (typeof onFocus === 'function') {onFocus(e)}
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
      setOpen(false)

      // clear if the text has no option
      if (filtered_list.length < 1) { setInputText("") } 
      if (typeof onBlur === 'function') {onBlur(e)}
    },
  }

  return (
    <div
      className={styles.big_container}
    >
      
      {// render a list if multiple selection
        multiple ? (
          <DisplayList
            list={SelectedList}
            onDelete={(obj) => {

              //delete the item from the list
              setSelectedList(SelectedList.filter(label => label !== obj.label));
              
            }}
          />
        ) : null
      }
      {typeof renderInput === 'function' && renderInput(input_component_props)}
      <VClickableList
        style={style}
        list={filtered_list}
        getLabel={getOptionLabel}
        containerClassName={wrapped_list_className}
        onClick={(obj) => {

          setOpen(false)
          
          // add to list if multiple selections is on
          if (multiple) {
            setSelectedList([...SelectedList, obj.label])
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