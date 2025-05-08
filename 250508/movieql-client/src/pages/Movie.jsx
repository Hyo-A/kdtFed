import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(-135deg, #81e761 0%, #04491b 100%);
  color: var(--light-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemGroup = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Column = styled.div`
  flex: 1;
  text-align: center;
`;

const Loading = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20vh;
  font-size: 1.8rem;
  font-weight: 500;
`;
const Title = styled.h1`
  font-size: 5rem;
  font-weight: 500;
  line-height: 1.3;
`;

const SubTitle = styled.h4`
  font-size: 3rem;
  margin: 15px 0 20px;
`;

const Button = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1.6rem;
  padding: 10px 16px;
  color: #04491b;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    background: #ccc;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 24px;
  font-weight: 300;
  padding-top: 40px;
`;

const Image = styled.div`
  width: 100%;
  height: 700px;
  flex: 1;
  background: url(${({ bg }) => bg}) top/cover no-repeat;
  border-radius: 4px;
`;

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      background_image
      medium_cover_image
      rating
      isLiked @client
    }
  }
`;
// @client이렇게 캐시 안에서만 관리할 값이라 알려주는거임

const Movie = () => {
  const { id } = useParams();
  const {
    data,
    loading,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });
  // apollo studio의 variables를 두번째 인자값에 객체로 넣어서 준

  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
  };
  // writeFragment는 어떠한 공간을 만들어서 저장하겠다는 뜻

  return (
    <>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <Container>
          <ItemGroup>
            <Column>
              <Title>{data.movie.title}</Title>
              <SubTitle>⭐{data.movie.rating}</SubTitle>
              <Button onClick={onClick}>
                {data.movie.isLiked ? "🤍 Unlike" : "💚 Like"}
              </Button>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                quisquam, temporibus necessitatibus corporis veniam maiores
                omnis quod non molestiae laudantium blanditiis, eius dignissimos
                maxime praesentium delectus! Vel asperiores ratione sit. Nisi
                incidunt illo corporis natus assumenda optio pariatur earum,
                quis officiis perferendis architecto? Minima soluta maiores qui
                doloremque molestias cumque hic sint eum tempora, magni, odit
                consectetur dignissimos neque illo? Itaque error necessitatibus
                fuga reprehenderit veniam illum amet! Ipsam nulla esse facere
                eaque aut atque quia ipsa sunt. Veniam cum eum qui eius placeat
                ullam, atque architecto quibusdam quidem inventore. eaque aut
                atque quia ipsa sunt. Veniam cum eum qui eius placeat ullam,
                atque architecto quibusdam quidem inventore.
              </Description>
            </Column>
            <Image bg={data.movie.medium_cover_image} />
          </ItemGroup>
        </Container>
      )}
    </>
  );
};

export default Movie;
