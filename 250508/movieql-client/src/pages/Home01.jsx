import { useState, useEffect } from "react";
import { gql, useApolloClient } from "@apollo/client";
// main.jsx에서 client 값을 보내줬는데 useapolloclient를 쓰면 찾아올 수 있음

const Home = () => {
  const [movies, setMovies] = useState([]);
  // movies는 우리가 찾아온 영화를 배열로 만들 예쩡임
  const client = useApolloClient();

  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allMovies {
              title
              id
            }
          }
        `,
      })
      .then((result) => setMovies(result.data.allMovies));
  }, [client]);

  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
