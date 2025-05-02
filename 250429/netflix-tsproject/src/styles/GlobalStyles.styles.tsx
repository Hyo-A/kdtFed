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
    --dark-color: #000,
    --light-color: #fff,
    --accent-color: #0099ff,
    --rate-color:#9ad1ff,
    --border-color: #d3e2e9,
  }

  html{
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: "Source Sans 3", sans-serif;
    height: 100%;
    background: ${({ theme }) => theme.black.darker};
  }
`;
