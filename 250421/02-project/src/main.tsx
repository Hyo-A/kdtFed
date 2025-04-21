import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme.ts";
// 얘는 theme값을 가져야 함

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
