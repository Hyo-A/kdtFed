import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const PrivateRoute = ({ authenticate }) => {
  // authenticate가 true인지 false인지에 따라서 반응이 바뀌믄거임
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
