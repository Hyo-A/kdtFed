import React from "react";

const Body = () => {
  const numbera = 1;
  const numberb = 2;

  const stringa = "Hello";
  const stringb = "HB";

  const boola = true;
  const boolb = false;

  const obja = {
    a: 1,
    b: 2,
  };

  return (
    <>
      <h1>Body</h1>
      <h2>
        1 / {numbera + numberb} / {stringa + stringb} / {String(boola || boolb)}{" "}
        / {String(boola && boolb)}
      </h2>
      <h2>{obja.a + obja.b}</h2>
    </>
  );
};

export default Body;
