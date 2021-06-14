import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import Theme from './Theme'
import GlobalStyles from './Global.styles'

const ThemeProvider = ({ theme, children }) => {
  const GlobalStylesContainer = () => {
    return(
      <Global styles={GlobalStyles.styles}/>
    )
  }

  return(
    <EmotionThemeProvider theme={Theme}>
      <GlobalStylesContainer/>
      {children}
    </EmotionThemeProvider>
  )
}

export default ThemeProvider