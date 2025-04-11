import React from "react";
import { useSelector } from "react-redux";

const Grandbox = () => {
  const count = useSelector((state) => state.count);
  return <div>This is Grandbox{count}</div>;
};

export default Grandbox;
