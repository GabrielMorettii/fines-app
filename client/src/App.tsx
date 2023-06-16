import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/theme/default'
import { GlobalStyles } from './styles/global'

import { Router as Routes } from './Router'

import { SessionContextProvider } from './contexts/SessionContext'

function App() {
  return (
    <BrowserRouter>
      <SessionContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
      </SessionContextProvider>
    </BrowserRouter>
  )
}

export default App
