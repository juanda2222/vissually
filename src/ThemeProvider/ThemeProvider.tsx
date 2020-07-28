import * as React from 'react'

import { ThemeProvider } from 'styled-components'
 

const ThemeConfig = ({ children, theme }: ThemeProps) => {
  
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}


ThemeConfig.defaultProps = {
  theme: {
    textColor1: "rgb(255, 255, 255)",
    textColor2: "rgb(255, 255, 255)",
    color1: "#135b75",
    color2: "#135b75",
    backgroundColor1: "rgb(255, 255, 255)",
    backgroundColor2: "rgb(255, 255, 255)",
  }
};




export default ThemeConfig