import { Outlet } from "react-router-dom";
// outlet을 쓰면 root가 최상위 요소로 자식을 받을 수 있음
import GlobalStyles from "./styles/Globalstyles.styles";

const Root = () => {
  return (
    <>
      <GlobalStyles />
      <Outlet />
    </>
  );
};

export default Root;
