import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const ButtonGroup = styled.div`
  display: flex;
  gap: 6px;
  & > button {
    font-size: 1.4rem;
    padding: 6px 10px;
    border-radius: 16px;
  }
`;

const WeatherButton = ({ cities, handleCityChange, selectedCity, setCity }) => {
  return (
    <ButtonGroup>
      <Button
        variant={`${selectedCity === null ? "primary" : "outline-primary"}`}
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>
      {cities.map((city) => (
        <Button
          key={city}
          variant={`${selectedCity == city ? "primary" : "outline-primary"}`}
          onClick={() => handleCityChange(city)}
        >
          {city}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default WeatherButton;
