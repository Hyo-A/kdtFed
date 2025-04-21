import { createRoot } from "react-dom/client";
import Router from "./Router.tsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={Router} />
);
