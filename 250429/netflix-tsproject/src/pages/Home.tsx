import { useState } from "react";
import { useNavigate, useMatch } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { getMovies, IGetMovieResult } from "../api";
import { makeImagePath } from "../utils";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.black.darker};
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

const Banner = styled.div<IBgPhoto>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0 30px;
  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${({ bgPhoto }) => bgPhoto}) center/cover no-repeat;
  color: ${({ theme }) => theme.white.darker};
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
`;

const OverView = styled.p`
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 1.5;
  width: 70%;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
  width: 100%;
`;

const SliderButton = styled.button`
  background: ${({ theme }) => theme.white.darker};
  position: absolute;
  right: 30px;
  top: -40px;
  padding: 8px 14px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: ${({ theme }) => theme.blue};
  }
`;

const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const Box = styled(motion.div)<IBgPhoto>`
  background: url(${({ bgPhoto }) => bgPhoto}) center/cover no-repeat;
  width: auto;
  height: 200px;
  cursor: pointer;
  &:first-child {
    transform-origin: left center;
  }
  &:last-child {
    transform-origin: right center;
  }
`;

const Info = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  h4 {
    color: ${({ theme }) => theme.white.darker};
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.5;
  }
`;

const InfoVariants = {
  hover: {
    transition: { delay: 0.5, type: "tween" },
    opacity: 1,
  },
};

const ModalBox = styled(motion.div)`
  left: 0;
  right: 0;
  width: 40vw;
  height: 60vh;
  margin: 0 auto;
  z-index: 2;
  background: ${({ theme }) => theme.black.lighter};
  color: ${({ theme }) => theme.white.darker};
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
`;

const MovieCover = styled.div<IBgPhoto>`
  width: 100%;
  height: 300px;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
    url(${({ bgPhoto }) => bgPhoto}) center/cover no-repeat;
`;

const MovieTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 20px;
  padding: 0 20px;
`;

const MovieOverView = styled.p`
  margin: 20px;
  font-size: 1.4rem;
  line-height: 1.5;
  font-weight: 300;
`;

interface IBgPhoto {
  bgPhoto: string | undefined;
}

const rowVariants = {
  hidden: {
    x: window.innerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 10,
  },
};

const boxVariants = {
  normal: { scale: 1, transition: { type: "tween" } },
  hover: { scale: 1.2, transition: { delay: 0.5, type: "tween" }, y: -40 },
};

const Home = () => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const { data, isLoading } = useQuery<IGetMovieResult>({
    queryKey: ["nowPlaying"],
    queryFn: getMovies,
  });

  const history = useNavigate();

  const ModalMatch = useMatch("/movies/:movieId");
  // usematch는 인자값으로 어떠한 경로인지를 써줘야함
  const { scrollY } = useScroll();

  const toggleLeaving = () => {
    setLeaving((prev) => !prev);
  };
  // 얘는 연타막기용으로 만든 leaving의 상태변화관리

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data?.results.length - 2;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      // ceil은 올리기
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const onBoxClicked = (movieId: number) => {
    history(`/movies/${movieId}`);
    // 얘 안에는 경로를 설정 해 줄 수 있다
  };

  const onOverlayClick = () => history("/");

  const ClickedMovie =
    ModalMatch?.params.movieId &&
    data?.results.find((movie) => movie.id === +ModalMatch?.params.movieId!);

  console.log(ClickedMovie);

  const offset = 6;
  // console.log(data);

  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
            <Title>{data?.results[0].title}</Title>
            <OverView>{data?.results[0].overview}</OverView>
          </Banner>
          <Slider>
            <SliderButton onClick={increaseIndex}>Next</SliderButton>
            <AnimatePresence
              initial={false}
              onExitComplete={toggleLeaving}
              // initial={false}는 자식요소의 초기값을 받지 않을거라는 의미 이걸 하면 이제 페이지 리로딩때에 scroll 이번트가 없이 깔끔하게 화면 출력된다
            >
              <Row
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
              >
                {data?.results
                  .slice(2) // 두 번째 요소부터 끝까지 잘라냅니다.
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      onClick={() => onBoxClicked(movie.id)}
                      key={movie.id}
                      initial={"normal"}
                      whileHover={"hover"}
                      variants={boxVariants}
                      layoutId={movie.id + ""}
                      bgPhoto={makeImagePath(movie.backdrop_path || "")}
                    >
                      <Info
                        variants={InfoVariants}
                        whileHover={"hover"}
                        transition={{ type: "tween" }}
                      >
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {ModalMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <ModalBox
                  layoutId={ModalMatch.params.movieId}
                  style={{ top: scrollY.get() + 80 }}
                >
                  {ClickedMovie && (
                    <>
                      <MovieCover
                        bgPhoto={makeImagePath(
                          ClickedMovie.backdrop_path || "",
                          "w500"
                        )}
                      />
                      <MovieTitle>{ClickedMovie.title}</MovieTitle>
                      <MovieOverView>{ClickedMovie.overview}</MovieOverView>
                    </>
                  )}
                </ModalBox>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Container>
  );
};

export default Home;
