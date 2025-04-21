// 기존 App 컴포넌트의 역할을 하는 파일임
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorComponent from "./components/ErrorComponent";
import User from "./pages/User";
import Followers from "./pages/Followers";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "followers",
            // 절대 "/followers"라 쓰면 안된다 슬래쉬가 두개가 될 수도
            // 상대경로와 절대경로의 차이가 있다
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

export default Router;
