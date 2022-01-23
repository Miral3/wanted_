import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  a, body, div, em, h1, h2, h3, h4, h5, h6, img, label, li, span, table, tbody, td, th, thead, tr, ul {
      margin: 0;
      padding: 0;
      border: 0;
  }
  a {
    text-decoration: none;
    color: #333333;
  }
  * {
    box-sizing: border-box;
  }
  *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body {
    font-size: 14px;
    line-height: 1.42857143;
    color: #333333;
    background-color: #f8f8fa;
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
  }
`

export default GlobalStyle;