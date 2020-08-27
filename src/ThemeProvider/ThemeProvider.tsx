import React, { } from 'react'


const DefaultThemes: {
  primary: DefaultTheme,
  secondary: DefaultTheme,
  secondaryDark: DefaultTheme,
  primaryDark: DefaultTheme
} = {
  primary: {
    textColor1: "rgb(0, 0, 0)", 
    textColor2: "rgb(255, 255, 255)", 
    color1: "#135b75", 
    color2: "#135b75", 
    backgroundColor1: "rgb(255, 255, 255)", 
    backgroundColor2: "rgb(70, 140, 170)", 
  },
  secondary: {
    textColor1: "rgb(30, 30, 30)",
    textColor2:  "rgb(240, 240, 240)",
    color1: "#0e9d55",
    color2: "#0e9d55",
    backgroundColor1: "rgb(250, 250, 250)",
    backgroundColor2: "rgb(70, 140, 170)",
  },
  primaryDark: {
    textColor1: "rgb(192, 197, 206)", 
    textColor2: "rgb(255, 255, 255)", 
    color1: "#1e8eb7", 
    color2: "#1e8eb7", 
    backgroundColor1: "rgb(255, 255, 255)", 
    backgroundColor2: "rgb(70, 140, 170)", 
  },
  secondaryDark: {
    textColor1: "rgb(192, 197, 206)", 
    textColor2: "rgb(255, 255, 255)",
    color1: "#10b462",
    color2: "#10b462",
    backgroundColor1: "rgb(250, 250, 250)",
    backgroundColor2: "rgb(70, 140, 170)",
  }
}

const ThemeContext = React.createContext(DefaultThemes.primary)

const VThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
  theme,
  primary,
  secondary,
  primaryDark,
  secondaryDark
}) => {

  var current_theme:DefaultTheme;
  if (secondary) {
    current_theme = DefaultThemes.secondary
  } else if (secondaryDark) {
    current_theme = DefaultThemes.secondaryDark
  } else if (primaryDark) {
    current_theme = DefaultThemes.primaryDark
  } else if (primary) {
    current_theme = DefaultThemes.primary
  } else if (theme) {
    current_theme = {
      ...DefaultThemes.primary,
      ...( theme && theme )
    } 
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