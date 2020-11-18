import { createGlobalStyle } from 'styled-components'
import fonts from './fonts'

export const GlobalStyle = createGlobalStyle`
  ${fonts}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "IBM Plex Sans Thai", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`
