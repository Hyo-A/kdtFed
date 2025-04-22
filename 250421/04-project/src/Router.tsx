import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./Root";
import Coin from "./assets/routes/Coin";
import Coins from "./assets/routes/Coins";
import Chart from "./assets/routes/Chart";
import Price from "./assets/routes/Price";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Coins />,
      },
      {
        path: "/:coinId",
        element: <Coin />,
        children: [
          {
            path: "",
            element: <Navigate to={"chart"} replace />,
            // 이건 path값이 없을때 기본빵으로 chart로 replace 해주는 함수
          },
          {
            path: "chart",
            element: <Chart />,
          },
          {
            path: "price",
            element: <Price />,
          },
        ],
      },
    ],
  },
]);

export default router;
