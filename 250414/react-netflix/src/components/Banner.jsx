import React from "react";
import styled from "styled-components";
import "./Banner.scss";
import { Button } from "react-bootstrap";

const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
  color: var(--light-color);
  margin-bottom: 30px;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerInfo = styled.div`
  position: absolute;
  top: 70%;
  left: 30px;
`;
const MovieTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
`;
const MovieOverview = styled.p`
  font-size: 1.6rem;
  line-height: 150%;
  width: 65%;
  font-family: "GmarketSansLight";
  margin-bottom: 10px;
`;

const Banner = ({ movie }) => {
  return (
    <Wrapper>
      <Img
        src={`https://image.tmdb.org/t/p/w1920/${movie.backdrop_path}`}
        alt="bgImg"
      />
      <BannerInfo className="bannerinfo">
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieOverview className="movieoverview">
          {movie.overview}
        </MovieOverview>
        <Button variant="outline-light">more info</Button>
      </BannerInfo>
    </Wrapper>
  );
};

export default Banner;
