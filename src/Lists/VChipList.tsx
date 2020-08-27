import React from 'react'
import VChip from "../Display/VChip"

function VChipList ({
  //functional
  onDelete,
  onClick,
  getListLabel,
  list,
}: ChipListProps ){

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
        key={label}
        label={label}
        onClick={() => {
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


export default VChipList