import React from "react";
import { useSelector } from "react-redux";
import Grandbox from "./Grandbox";

const Box = () => {
  const count = useSelector((state) => state.count);
  return (
    <>
      <div>This is Box{count}</div>
      <Grandbox />
    </>
  );
};

export default Box;
