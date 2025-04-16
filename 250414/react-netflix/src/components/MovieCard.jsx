import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";
import "./MovieCard.scss";

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  padding-left: 10px;
  overflow: hidden;
  cursor: pointer;
  transform: translateX(-10px);
  &:hover .overlay {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background: rgba(0, 0, 0, 0.3);
  transition: opacity 0.4s;
`;

const Img = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  width: 50%;
  top: 22px;
  left: 20px;
  font-size: 1.6rem;
  position: absolute;
  line-height: 150%;
  word-break: keep-all;
`;

const Genre = styled.div`
  position: absolute;
  font-family: "GmarketSansLight";
  display: flex;
  gap: 4px;
  font-size: 1.4rem;
`;

const Vote = styled.span`
  position: absolute;
  bottom: 22px;
  right: 20px;
  font-size: 1.2rem;
  font-family: "GmarketSansLight";
`;

const Adult = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: var(--dark-color);
  background: var(--accent-color2);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  text-align: center;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
`;

const MovieCard = ({ item }) => {
  const { genresMovie } = useSelector((state) => state.movie);

  return (
    <Wrapper className="cardwrapper">
      <Overlay className="overlay"></Overlay>
      <Img
        src={`https://media.themoviedb.org/t/p/w500_and_h282_face/${item.backdrop_path}`}
        alt="thumbnail"
      />
      <Title>
        {item.title}
        <Genre>
          {item.genre_ids.map((id, index) => (
            <Badge bg="dark" key={index}>
              {genresMovie.find((item) => item.id === id).name}
            </Badge>
          ))}
        </Genre>
      </Title>
      <Adult>{item.adult ? "성인" : "전체"}</Adult>

      <Vote>⭐ 영화평점 : {item.vote_average.toFixed(2)}</Vote>
    </Wrapper>
  );
};

export default MovieCard;
