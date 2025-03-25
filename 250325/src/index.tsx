import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`

${reset}

* {
  box-sizing: border-box;
}

ul,li {
  list-style: none;
}

a {
  color: inherit;
  text-decoration:none;
}

:root {
  --light-color: #fff;
}

body {
  width: 100%;
  height: 100vh;
  font-family: "DynaPuff", system-ui;
  background: linear-gradient(90deg ,#b8df6e,#73fc7e);
}
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <App />
    <GlobalStyles />
  </>
);
