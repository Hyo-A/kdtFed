import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import NomalPage from "./pages/NomalPage";
import ReactQuery from "./pages/ReactQuery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/nomal-page",
        element: <NomalPage />,
      },
      {
        path: "/react-query",
        element: <ReactQuery />,
      },
    ],
  },
]);

export default router;
