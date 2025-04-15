import Globalstyles from "./styles/Globalstyles.styles";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "movie/:id", element: <MovieDetail /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Globalstyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
