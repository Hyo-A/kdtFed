import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

  *{
    box-sizing: border-box;
  }

  ul,li {
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  :root {
    --light-color: #fff;
    --dark-color: #000;
    --border-color: #ccc;
    --accent-color: #da000b;
  }

  html {
    font-size:62.5%;
  }

  body {
    font-size:1.6rem;
    font-family: 'Pretendard-Regular';
  }

  @media screen and (max-width: 747px) {
    .fendi {
      transform: scale(0.8);
    }
    .menu {
      display: none;
    }
    .headertop{
      top: 100px;
    }
    .togglebtn{
      top: 110px;
    }
  }
`;

export default GlobalStyles;
