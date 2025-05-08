import { gql, useQuery } from "@apollo/client";
// main.jsx에서 client 값을 보내줬는데 useapolloclient를 쓰면 찾아올 수 있음
// apollo client의 useQuery는 특별하다 =>
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  height: 45vh;
  background: linear-gradient(-135deg, #81e761 0%, #04491b 100%);
  color: var(--light-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 600;
`;

const Loading = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20vh;
  font-size: 1.8rem;
  font-weight: 500;
`;

const MoviesGrid = styled.div`
  width: 60vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: -50px;
`;

const PosterContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
`;

const PosterBg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ backgroud }) => backgroud}) center/cover no-repeat;
`;

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      id
      title
      medium_cover_image
    }
  }
`;
// query getMovies는 이름을 다는것처럼 달아준것 뿐이지 없어도 된다 (관습)
// gql 문법은 컴포넌트 밖에서도 쓸수 있다는 사실

const Home = () => {
  const { loading, data } = useQuery(ALL_MOVIES);
  // usequery나 useparams를 거치면 숫자였던것도 문자가 되어버린다
  // 놀랍다! 이렇게밖에 안했는데 allmovie arrary를 찾아왔는데 loading 상태에 따라 데이터가 있다없다 함
  // 이러면 로딩스피너 부분도 만질수 있겠다
  console.log(data);

  return (
    <Container>
      <Header>
        <Title>Movies List</Title>
      </Header>

      {loading ? (
        <Loading>Loading</Loading>
      ) : (
        <MoviesGrid>
          {data.allMovies.map((movie) => (
            <PosterContainer key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <PosterBg backgroud={movie.medium_cover_image} />
              </Link>
            </PosterContainer>
          ))}
        </MoviesGrid>
      )}
    </Container>
  );
};

export default Home;
