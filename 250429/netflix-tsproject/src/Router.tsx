import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import Tv from "./pages/Tv";
import Movies from "./pages/Movies";
import Search from "./pages/Search";
import Review from "./pages/Review";
import Videos from "./pages/Videos";

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
        path: "/movies/:movieId",
        element: <Home />,
      },
      {
        path: "tv",
        element: <Tv />,
      },
      {
        path: "movie",
        element: <Movies />,
      },
      {
        path: "search",
        element: <Search />,
        children: [
          {
            path: "review",
            element: <Review />,
          },
          {
            path: "video",
            element: <Videos />,
          },
        ],
      },
    ],
  },
]);

export default router;
