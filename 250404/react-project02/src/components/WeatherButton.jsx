import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  & > button {
    font-size: 1.4rem;
    padding: 6px 10px;
    border-radius: 16px;
  }
`;

const WeatherButton = ({ cities }) => {
  return (
    <ButtonGroup>
      <Button variant="outline-primary">Current Location</Button>
      {cities.map((it) => (
        <Button key={it}>{it}</Button>
      ))}
    </ButtonGroup>
  );
};

export default WeatherButton;
