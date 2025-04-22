import { Outlet } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default Root;
