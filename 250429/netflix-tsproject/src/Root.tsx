import { GlobalStyles } from "./styles/GlobalStyles.styles";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Header from "./components/Header";

const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default Root;
