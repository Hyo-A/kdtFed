import React, { useState } from "react";

const Viewer = ({ count }) => {
  return (
    <div>
      <div>현제 카운터 : </div>
      <h1>{count}</h1>
    </div>
  );
};

export default Viewer;
