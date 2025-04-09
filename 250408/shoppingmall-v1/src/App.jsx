import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles.styles";
import ProductAll from "./Pages/ProductAll";
import Login from "./Pages/Login";
import Layout from "./Pages/Layout";
import PrivateRoute from "./Pages/PrivateRoute";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log("Login :", authenticate);
  }, [authenticate]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout authenticate={authenticate} setAuthenticate={setAuthenticate} />
      ),
      children: [
        {
          index: true,
          element: <ProductAll />,
        },
        {
          path: "login",
          element: <Login setAuthenticate={setAuthenticate} />,
        },
        {
          path: "products/:id",
          element: <PrivateRoute authenticate={authenticate} />,
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
