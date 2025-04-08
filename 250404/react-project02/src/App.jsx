import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styles";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import { ClipLoader } from "react-spinners";

const API_KEY = import.meta.env.VITE_API_KEY;

const API_UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ img }) => `url(${img})`} center/cover no-repeat;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

function App() {
  const [loading, setLoading] = useState(false);
  // 일단은 로딩이 아니라고 설정해놓은 setState함수

  const [weather, setWeather] = useState(null);

  const [city, setCity] = useState(null);

  const [apiError, setApiError] = useState("");

  const [background, setBackground] = useState("");

  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setApiError(error.message);
      setLoading(false); // error 메세지 주고, 로딩은 종결시키게 한다
      console.error("error");
    } // try 안에는 로딩이 되었을때의 상황 catch문에다가 error 상황일때를 넣는거임
    // 바로 try catch문
  };

  const getWeatherByCity = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setApiError(error.message);
      setLoading(false); // error 메세지 주고, 로딩은 종결시키게 한다
      console.error("error");
    }
  };

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
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

  const getBackground = () => {
    const getImg = ` https://api.unsplash.com/photos/random?client_id=${API_UNSPLASH_KEY}`;

    fetch(getImg)
      .then((response) => response.json())
      .then(({ urls: { full } }) => {
        setBackground(background);
      });
  };

  useEffect(() => {
    getBackground();
  }, []);

  useEffect(() => {
    if (city === null) {
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity();
    }
  }, [city]);

  return (
    <>
      <GlobalStyles />
      {loading ? (
        <div>
          <ClipLoader color="#0B5ED7" size={50} loading={loading} />
        </div>
      ) : (
        <Wrapper img={background}>
          <Container>
            <WeatherBox weather={weather} />
            <WeatherButton
              cities={cities}
              handleCityChange={handleCityChange}
              selectedCity={city}
            />
          </Container>
        </Wrapper>
      )}
    </>
  );
}

export default App;
