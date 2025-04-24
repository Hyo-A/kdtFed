import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { defaltTheme } from "./theme.ts";
import Root from "./Root.tsx";

createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <ThemeProvider theme={defaltTheme}>
      <Root />
    </ThemeProvider>
  </RecoilRoot>
);
