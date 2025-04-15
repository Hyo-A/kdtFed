import React from "react";
import styled from "styled-components";
import "./MovieCard.scss";

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`;

const Overlay = styled.div``;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1``;

const Genere = styled.div``;

const InfoGroup = styled.div``;

const Vote = styled.span``;

const Adult = styled.div``;

const MovieCard = ({ item }) => {
  // console.log(item);
  return (
    <Wrapper className="cardwrapper">
      <Img
        src={`https://media.themoviedb.org/t/p/w500_and_h282_face/${item.backdrop_path}`}
        alt="thumbnail"
      />
    </Wrapper>
  );
};

export default MovieCard;
