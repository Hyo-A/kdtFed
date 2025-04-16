import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { ClipLoader } from "react-spinners";

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  width: 180px;
  color: var(--dark-color);
  font-size: 1.4rem;
  padding: 10px 14px;
  margin: 18px 0 18px 20px;
  background: var(--accent-color);
  text-align: center;
  border-radius: 4px;
`;

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#00b7ff",
};

const Home = () => {
  const dispatch = useDispatch();
  const { nowplayingMovie, topRatedMovie, upComingMovie, loading } =
    useSelector((state) => state.movie);

  // console.log(nowplayingMovie, topRatedMovie, upComingMovie);
  // console.log(nowplayingMovie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <ClipLoader cssOverride={override} size={150} />
      </Wrapper>
    );
  } else {
    return (
      <>
        {nowplayingMovie.results && (
          <Banner movie={nowplayingMovie?.results[19]} />
        )}
        <Title className="hometitle">NowPlaying Movie</Title>
        <MovieSlide movies={nowplayingMovie} />
        <Title className="hometitle">TopRated Movie</Title>
        <MovieSlide movies={topRatedMovie} />
        <Title className="hometitle">UpComint Movie</Title>
        <MovieSlide movies={upComingMovie} />
      </>
    );
  }
};

export default Home;
