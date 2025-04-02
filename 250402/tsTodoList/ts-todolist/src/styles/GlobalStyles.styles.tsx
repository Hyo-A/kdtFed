import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

ul,li {
  list-style: none;
}

*{
    box-sizing:border-box;
  }

a {
  text-decoration: none;
}

:root {
  --light-color: #fff;
  --dark-color: #000;
  --accent-color: #dc143c;
  --border-color: #ccc;
  --background-color: #222;
  --button-color: #d775eb;
  --background-color2 : #f7f7f7;
}

html {
  font-size: 62.5%;
}

body {
  width:100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.6rem;
}
`;

export default GlobalStyles;
