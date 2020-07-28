import * as React from 'react'

import { ThemeProvider } from 'styled-components'

export default ({ children, theme }: ThemeProps  ) => {
  
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
