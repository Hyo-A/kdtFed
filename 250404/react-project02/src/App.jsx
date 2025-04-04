import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styles";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";

const API_KEY = import.meta.env.VITE_API_KEY;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

function App() {
  const [weather, setWeather] = useState(null);

  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeatherByCurrentLocation(lat, lon);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        <WeatherBox weather={weather} />
        <WeatherButton cities={cities} />
      </Container>
    </>
  );
}

export default App;
