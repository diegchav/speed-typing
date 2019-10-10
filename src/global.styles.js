import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;