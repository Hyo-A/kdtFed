import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { getMovies, IGetMovieResult } from "../api";
import { makeImagePath } from "../utils";

const Container = styled.div`
  width: 100%;
  height: 200vh;
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
  font-size: 1.6rem;
  font-weight: 200;
  line-height: 1.4;
  width: 70%;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
  width: 100%;
`;

const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const Box = styled(motion.div)`
  background: ${({ theme }) => theme.white.darker};
  width: auto;
  height: 200px;
`;

const Info = styled.div``;

const ModalBox = styled.div``;

const Overlay = styled.div``;

const MovieCover = styled.div``;

const MovieTitle = styled.h3``;

const MovieOverView = styled.p``;

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

const Home = () => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const { data, isLoading } = useQuery<IGetMovieResult>({
    queryKey: ["nowPlaying"],
    queryFn: getMovies,
  });

  const toggleLeaving = () => {
    setLeaving((prev) => !prev);
  };
  // 얘는 연타막기용으로 만든 leaving의 상태변화관리

  const increaseIndex = () => {
    {
      if (leaving) return;
      toggleLeaving();
      setIndex((prev) => prev + 1);
    }
  };

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const offset = 6;
  let page = 0;

  console.log(arr.slice(page * offset, page * offset + offset));

  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <OverView>{data?.results[0].overview}</OverView>
          </Banner>
          <Slider>
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
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Box key={i}>{i}</Box>
                ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Container>
  );
};

export default Home;
