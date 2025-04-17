import { Outlet } from "react-router-dom";
// 페이지 라우팅을 하는 최상위페이지 outlet을 불러와야해

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
