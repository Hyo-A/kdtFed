import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Ownglyph_ParkDaHyun';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2411-3@1.0/Ownglyph_ParkDaHyun.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  *{
    box-sizing: border-box;
  }

  ul,li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  :root {
    --light-color: #fff;
    --dark-color: #000;
    --border-color: #ccc;
    --green-color: #008000;
    --accent-color: #dc143c;
  }

  html {
    font-size:62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Ownglyph_ParkDaHyun';
  }
`;

export default GlobalStyles;
