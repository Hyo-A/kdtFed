import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
