import * as React from 'react'

import { ThemeProvider, withTheme } from 'styled-components'

const DefaultThemes = {
  primary: {
    textColor1: "rgb(255, 255, 255)",
    textColor2: "rgb(0, 0, 0)",
    color1: "#135b75",
    color2: "#135b75",
    backgroundColor1: "rgb(255, 255, 255)",
    backgroundColor2: "rgb(70, 140, 170)",
  },
  secundary: {
    textColor1: "rgb(255, 255, 255)",
    textColor2: "rgb(0, 0, 0)",
    color1: "#10b462",
    color2: "#10b462",
    backgroundColor1: "rgb(255, 255, 255)",
    backgroundColor2: "rgb(70, 140, 170)",
  },
  dark: {
    textColor1: "rgb(0, 0, 0)",
    textColor2: "rgb(255, 255, 255)",
    color1: "#10b462",
    color2: "#10b462",
    backgroundColor1: "rgb(70, 140, 170)",
    backgroundColor2: "rgb(255, 255, 255)",
  }
}

const ThemeConfig = (props: ThemeProps) => {
  
  const { children, theme, primary, secundary, dark } = {
    ...props
  }
  console.log(theme)
  console.log(primary)
  console.log(secundary)

  var current_theme;
  if (secundary) {
    console.log("secundary")
    current_theme = DefaultThemes.secundary
  } else if (dark) {
    console.log("dark")
    current_theme = DefaultThemes.dark
  } else if (primary) {
    console.log("primary")
    current_theme = DefaultThemes.primary
  } else {
    console.log("default")
    current_theme = DefaultThemes.primary
  }
  
  console.log(current_theme)
  return (
    <ThemeProvider {...props} theme={current_theme}>
      {children}
    </ThemeProvider>
  )
  
}

ThemeConfig.defaultProps = {
  theme: null,
  primary: null,
  secundary: null,
  dark:null
};

export default withTheme(ThemeConfig)