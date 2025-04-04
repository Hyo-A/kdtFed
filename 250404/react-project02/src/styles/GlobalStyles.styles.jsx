import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  *{
    box-sizing: border-box;
  }

  ul,li{
    list-style: none;
  }

  a {
    text-decoration: none;
  }

:root {
  --light-color: #fff;
  --dark-color: #000;
  --border-color: #ccc;
  --accent-color: #dc143c;
}

  html {
    font-size:62.5%
  }

  body {
    width:100%;
    height: 100vh;
    font-size:1.6rem;
    font-family: 'GmarketSansMedium';
    background: url("https://wallpapers-clan.com/wp-content/uploads/2024/05/pastel-sky-clouds-gradient-desktop-wallpaper-preview.jpg") center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyles;
