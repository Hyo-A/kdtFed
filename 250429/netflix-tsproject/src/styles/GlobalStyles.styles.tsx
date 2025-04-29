import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

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
    --dark: #000,
    --light: #fff,
    --accent: #0099ff,
    --sub:#9ad1ff,
    --border: #c8d8e0,
  }

  html{
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: "Source Sans 3", sans-serif;
  }
`;
