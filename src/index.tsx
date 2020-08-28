
import { VThemeProvider } from './ThemeProvider/ThemeProvider'
import VButton from './Buttons/VButton'
import VClickableList from "./Lists/VClickableList"
import VInput from './Inputs/VInput'
import VSelect from './Inputs/VSelect'
import VChip from './Display/VChip'
import VAutoComplete from './AutoComplete/VAutoComplete'

// export components
export {
  VThemeProvider,
  VButton,
  VInput,
  VClickableList,
  VSelect,
  VChip,
  VAutoComplete,
}

// export types (rename them)
export type VThemeType = Theme
export type VDefaultTheme = DefaultTheme 
export type VThemeProviderProps = ThemeProviderProps 
export type VListProps = ListProps 
export type VSelectProps = SelectProps 
export type VInputProps = InputProps
export type VButtonProps = ButtonProps 
export type VChipProps = ChipProps
export type VChipListProps = ChipListProps 
export type VAutoCompleteProps = AutoCompleteProps
