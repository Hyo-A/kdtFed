import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const Globalstyles = createGlobalStyle`
${reset}

@font-face {
    font-family: 'GmarketSansLight';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: 300;
}
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: 500;
}
@font-face {
    font-family: 'GmarketSansBold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: 700;
}

*{
  box-sizing: border-box;
}

ul,li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

:root {
  --light-color: #fff;
  --dark-color: #000;
  --accent-color:  linear-gradient(135deg,#26c2ff 0%, #53edd3 100%);
  --accent-color2: #26c2ff;
  --border-color: #ccc;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: 'GmarketSansMedium';
  width: 100%;
  height: 2000px;
  background: var(--dark-color);
}
`;

export default Globalstyles;
