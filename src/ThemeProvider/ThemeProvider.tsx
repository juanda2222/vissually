import React, { } from 'react'


const DefaultThemes: {primary: Theme, secundary: Theme, dark: Theme} = {
  primary: {
    textColor1: "rgb(0, 0, 0)", 
    textColor2: "rgb(255, 255, 255)", 
    color1: "#135b75", 
    color2: "#135b75", 
    backgroundColor1: "rgb(255, 255, 255)", 
    backgroundColor2: "rgb(70, 140, 170)", 
  },
  secundary: {
    textColor1: "rgb(30, 30, 30)",
    textColor2:  "rgb(240, 240, 240)",
    color1: "#10b462",
    color2: "#10b462",
    backgroundColor1: "rgb(250, 250, 250)",
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

const ThemeContext = React.createContext(DefaultThemes.primary)

const VThemeProvider = (props: ThemeProps) => {
  
  const {
    children,
    theme,
    primary, secundary, dark
  } = props

  var current_theme;
  if (secundary) {
    current_theme = DefaultThemes.secundary
  } else if (dark) {
    current_theme = DefaultThemes.dark
  } else if (primary) {
    current_theme = DefaultThemes.primary
  } else if (theme) {
    current_theme = theme
  } else {
    current_theme = DefaultThemes.primary
  }

  return (
    <ThemeContext.Provider value={current_theme}>
      {children}
    </ThemeContext.Provider>
  )
}


export {
  VThemeProvider,
  ThemeContext,
  DefaultThemes
}