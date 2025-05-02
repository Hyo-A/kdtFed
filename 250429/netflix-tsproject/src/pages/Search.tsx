import { useState, useEffect } from "react";
// useLocation는 주소창 값을 찾아와서 쓸수있게 해주는 함수
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Pagination from "react-js-pagination";
import YouTube from "react-youtube";
import {
  searchContents,
  IGetMovieResult,
  searchGenres,
  getReviews,
  IReviewsContents,
  getVideos,
} from "../api";
import { makeImagePath } from "../utils";

// // style 정의 //
const Container = styled.div`
  width: 100%;
  height: 200vh;
  color: ${({ theme }) => theme.white.darker};
  padding: 90px 30px 0;
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.white.darker};
  font-weight: 200;
`;

const SearchBox = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;
const MovieSection = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;
const MovieImg = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
`;
const ReadyWrapper = styled.div`
  width: 50%;
  height: auto;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: lighter;
  }
`;
const Ready = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  opacity: 0.2;
  &:hover {
    opacity: 0.5;
  }
`;
const MovieInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const MovieTitle = styled.h4`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.white.darker};
  background: ${({ theme }) => theme.blue};
  padding: 10px;
  border-radius: 4px;
`;
const MovieOverview = styled.p`
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: lighter;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.blue};
`;
const MovieDate = styled.div`
  font-size: 1.4rem;
  span {
    display: block;
    padding: 8px 12px;
    background: #9ad1ff;
    border-radius: 4px;
    color: ${({ theme }) => theme.black.lighter};
  }
`;
const MovieRate = styled.div`
  font-size: 1.4rem;
  span {
    display: block;
    padding: 8px 12px;
    background: #9ad1ff;
    border-radius: 4px;
    color: ${({ theme }) => theme.black.lighter};
  }
`;

const RateNumbers = styled.div`
  font-size: 1.4rem;
  span {
    display: block;
    padding: 8px 12px;
    background: #9ad1ff;
    border-radius: 4px;
    color: ${({ theme }) => theme.black.darker};
  }
`;
const MovieValue = styled.div`
  font-weight: 700;
  display: block;
  padding: 8px 12px;
  background: ${({ theme }) => theme.blue};
  border-radius: 4px;
  color: ${({ theme }) => theme.white.darker};
`;
const GenreSection = styled.div`
  font-size: 1.4rem;
  display: block;
  padding: 8px 12px;
  background: #9ad1ff;
  border-radius: 4px;
  color: ${({ theme }) => theme.black.lighter};
`;
const ReviewSection = styled.div`
  background: #d3e2e9;
  margin-top: 20px;
  padding: 20px;
  border-radius: 4px;
  color: ${({ theme }) => theme.black.lighter};
  li {
    margin: 10px 0;
  }
`;
const ReviewTitle = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.blue};
`;

const SnallTitle = styled.span`
  font-size: 1.4rem;
`;

const YoutubeContent = styled.div`
  margin-top: 20px;
  border-radius: 4px;
  overflow: hidden;
`;

const Tabs = styled.div``;
const Tab = styled.span``;
//

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  ul {
    display: flex;
    gap: 10px;
    li {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      transition: all 0.3s;
      &:hover {
        border: 1px solid #fff;
      }
      a {
        font-size: 1.6rem;
      }
    }
  }
`;
// // style 정의 끝 //

interface Obj {
  id: number;
  name: string;
}

interface IContentState {
  [key: number]: string[];
}

const Search = () => {
  const [videos, setVideos] = useState<IContentState>([]);
  const { search } = useLocation();
  // const keyword = search.split("=")[1]; 이렇게 써도 query의 key를 가져올수 잇는데 이케 안할거임ㄴ
  const keyword = new URLSearchParams(search).get("keyword");
  // URLSearchParams는 인자값으로 확인하고자 하는것을 넣어야해
  const { data: movieData, isLoading: movieLoading } =
    useQuery<IGetMovieResult>({
      queryKey: ["searchContents", keyword],
      queryFn: () => searchContents(keyword),
    });

  const { data: genreData, isLoading: genreLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: searchGenres,
  });

  const ids = movieData?.results.map((movie) => movie.id);

  const { data: reviewData, isLoading: reviewLoading } = useQuery({
    queryKey: ["reviews", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getReviews(id))) : Promise.resolve([]),
  });

  const { data: videoData, isLoading: videoLoading } = useQuery({
    queryKey: ["videos", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getVideos(id))) : Promise.resolve([]),
  });

  // moviedata에 매칭되어지는 일치되어진 값을 추출해

  useEffect(() => {
    if (movieData && videoData) {
      movieData.results.forEach((movie) => {
        getVideos(movie.id).then((data) => {
          console.log(data);
          if (data?.results) {
            const videoIds = data.results.map((video: any) => video.key);
            setVideos((prev) => ({
              ...prev,
              [movie.id]: videoIds,
            }));
          }
        });
      });
    }
  }, [movieData, videoData]);

  // console.log(movieData, genreData, reviewData, videoData);
  console.log(videos);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(4);

  const handlPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies =
    movieData?.results.slice(indexOfFirstMovie, indexOfLastMovie) || [];

  return (
    <Container>
      {movieLoading ? (
        <Loader>Loading</Loader>
      ) : (
        <>
          {currentMovies.map((movie, index) => (
            <SearchBox key={movie.id}>
              <MovieSection>
                {movie.backdrop_path ? (
                  <MovieImg src={makeImagePath(movie.backdrop_path)} />
                ) : (
                  <>
                    <ReadyWrapper>
                      <Ready src="/31846073dc3eaea0379ac845b16a673b.jpg" />
                      <span>no img</span>
                    </ReadyWrapper>
                  </>
                )}

                <MovieInfo>
                  <MovieTitle>{movie.original_title}</MovieTitle>
                  <MovieOverview>{movie.overview}</MovieOverview>
                  <MovieDate>
                    <span>Release : {movie.release_date}</span>
                  </MovieDate>
                  <MovieRate>
                    <span>Rate : {movie.vote_average.toFixed(2)}</span>
                  </MovieRate>
                  <RateNumbers>
                    <span>
                      Members : {movie.vote_count.toLocaleString("ko-kr")}
                    </span>
                  </RateNumbers>
                  <MovieValue>{movie.adult ? "18+" : "ALL"}</MovieValue>
                  <GenreSection>
                    {movie.genre_ids
                      .map(
                        (id) =>
                          genreData.genres.find((item: Obj) => item.id === id)
                            .name
                        // 객체를 원래 가져올수 없다함 .name을 써야만 한다
                      )
                      .join(" ,")}
                  </GenreSection>
                </MovieInfo>
              </MovieSection>
              <ReviewSection>
                <ReviewTitle>
                  <SnallTitle>💙</SnallTitle> Review <SnallTitle>💙</SnallTitle>
                </ReviewTitle>
                {reviewLoading ? (
                  <div>Loading Reviews...</div>
                ) : (
                  <ul>
                    {reviewData &&
                    // Array.isArray(reviewData[index].results) &&
                    reviewData[index].results.length > 0 ? (
                      // Array.isArray는? 안의 인자값이 array인지를 boolean으로
                      reviewData[index]?.results.map(
                        (review: IReviewsContents) => (
                          <li>
                            <span
                              style={{
                                fontSize: "1.6rem",
                                fontWeight: "600",
                                color: "#0099ff",
                                lineHeight: 2,
                              }}
                            >
                              {review.author}
                            </span>
                            <br />
                            <span
                              style={{
                                fontSize: "1.3rem",
                                lineHeight: 1.3,
                              }}
                            >
                              {review.content}
                            </span>
                          </li>
                        )
                      )
                    ) : (
                      <li>Not yet reviews...</li>
                    )}
                  </ul>
                )}
              </ReviewSection>
              <YoutubeContent>
                {videos[movie.id]?.length > 0 ? (
                  <YouTube
                    videoId={videos[movie.id]}
                    opts={{
                      width: "100%",
                      height: "400px",
                      playerVars: {
                        autoplay: 0, // 자동재생여부
                        modestbranding: 1, // 컨트롤바에 유투브 로고 표시여부
                        loop: 0, // 반복무한재생 여부
                        playlist: videos[movie.id][0], // 반복무한재생 하고자 하는 영상 찝어주기
                      },
                    }}
                  />
                ) : (
                  <div>youtube video is not available...</div>
                )}
              </YoutubeContent>
            </SearchBox>
          ))}
          <StyledPagination>
            <Pagination
              onChange={handlPageChange}
              activePage={currentPage}
              itemsCountPerPage={moviesPerPage}
              totalItemsCount={movieData?.results.length || 0}
              pageRangeDisplayed={4}
            />
          </StyledPagination>
        </>
      )}
      <Outlet />
    </Container>
  );
};

export default Search;
