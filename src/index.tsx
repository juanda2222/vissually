import React from 'react'
import styles from './styles.module.css'
import { VThemeProvider } from './ThemeProvider/ThemeProvider'
import VButton from './Buttons/VButton'
import VClickableList from "./Lists/VClickableList"
import VTextInput from './Inputs/VTextInput'
import VSelect from './Inputs/VSelect'
import VChip from './Display/VChip'
import VAutoComplete from './Autocomplete/VAutoComplete'


interface Props {
  text: string
}

const ExampleComponent = ({ text }: Props) => {
  return (
    <div>
      <div
        className={styles.test}>VClickableListVClickableList
        {`This is the custom wrapper >>> ${text} <<<`}</div>
    </div>
  )
}

export {
  ExampleComponent,
  VThemeProvider,
  VButton,
  VTextInput,
  VClickableList,
  VSelect,
  VChip,
  VAutoComplete,
}