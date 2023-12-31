import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors['surface-variant']};
    color: ${({ theme }) => theme.colors['on-surface-variant']};
   
    -webkit-font-smoothing: antialiased;
  }

  body, #root {
    height: 100vh;
  }

  a {
    text-decoration: none;
  }
`
