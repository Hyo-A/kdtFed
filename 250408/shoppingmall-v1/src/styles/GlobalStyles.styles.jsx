import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
  }

  ul,li {
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  :root {
    --light-color: #fff;
    --dark-color: #000;
    --border-color: #ccc;
    --accent-color: #ff4800;
  }

  html {
    font-size:62.5%;
  }

  body {
    font-size:1.6rem;
  }
`;

export default GlobalStyles;
