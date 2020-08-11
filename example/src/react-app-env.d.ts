/// <reference types="react-scripts" />

// export the theme state
interface ThemeStateType {
  is_dark:boolean,
  palette_type: "light" | "dark",
}

type ChangeTemeActionType = () => void

