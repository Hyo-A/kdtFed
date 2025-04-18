import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { questionData } from "../assets/questiondata";

const Container = styled.div`
  height: 100vh;
  background: url("https://i.pinimg.com/736x/57/75/f9/5775f92ccc08e42146201181a9e0982e.jpg")
    center/cover no-repeat;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 98vh;
`;

const Title = styled.div`
  font-size: 2rem;
  background: var(--light-color);
  color: var(--accent-color);
  padding: 20px 20px 15px 20px;
  border-radius: 4px;
  font-family: "SBAggroB";
  margin-bottom: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 780px) {
    max-width: 340px;
    font-size: 1.6rem;
    padding: 16px 16px 11px 16px;
    line-height: 150%;
    text-align: center;
  }
`;
// @media 여기서 쓰려면 원하는 컴포넌트 안에 넣어야함

const ButtonGroup = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  & > button[type="button"] {
    width: 360px;
    height: 200px;
    font-size: 1.8rem;
    border-radius: 8px;
    padding: 50px;
  }
  @media screen and (max-width: 780px) {
    flex-direction: column;
    & > button[type="button"] {
      width: 340px;
      height: 180px;
      font-size: 1.6rem;
    }
  }
`;

const CatImg = styled.div`
  position: absolute;
  bottom: -50px;
  right: -70px;
  width: 200px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 780px) {
    bottom: -80px;
    right: -20px;
  }
`;

const Question = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    {
      id: "EI",
      score: 0,
    },
    {
      id: "SN",
      score: 0,
    },
    {
      id: "TF",
      score: 0,
    },
    {
      id: "JP",
      score: 0,
    },
  ]);
  const navigate = useNavigate();

  // const handleClickButtonA = (no, type) => {
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + no;
  //     const newObject = {
  //       id: "EI",
  //       score: addScore,
  //     };
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + no;
  //     const newObject = {
  //       id: "SN",
  //       score: addScore,
  //     };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + no;
  //     const newObject = {
  //       id: "TF",
  //       score: addScore,
  //     };
  //     totalScore.splice(2, 1, newObject);
  //   } else if (type === "JP") {
  //     const addScore = totalScore[3].score + no;
  //     const newObject = {
  //       id: "JP",
  //       score: addScore,
  //     };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   setQuestionNo(questionNo + 1);
  // };

  // const handleClickButtonB = (no, type) => {
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + no;
  //     const newObject = {
  //       id: "EI",
  //       score: addScore,
  //     };
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + no;
  //     const newObject = {
  //       id: "SN",
  //       score: addScore,
  //     };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + no;
  //     const newObject = {
  //       id: "TF",
  //       score: addScore,
  //     };
  //     totalScore.splice(2, 1, newObject);
  //   } else if (type === "JP") {
  //     const addScore = totalScore[3].score + no;
  //     const newObject = {
  //       id: "JP",
  //       score: addScore,
  //     };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   setQuestionNo(questionNo + 1);
  // };

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    setTotalScore(newScore);
    if (questionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          [curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)],
        ""
      );
      // reduce는 누산기 함수 두번째 값으로 초기값을 줭야한다
      // acc는 누적되어진 계산값, current는 신규값 acc의 초기값은 빈 문자열이다 누산기에서 acc가 계속 계산된다
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({ mbti: mbti })}`,
      });
      // path값과 쿼리값 내가 만든것을 넣을거란말임
      // 쿼리값 만드는게 createsearchparams고 그 함수 안에는 key 와 value가 들어감
    }
  };

  return (
    <>
      <Container>
        <ProgressBar
          striped
          variant="success"
          now={(questionNo / questionData.length) * 100}
        />
        <Wrapper>
          <Title>{questionData[questionNo].title}</Title>

          <ButtonGroup>
            <Button
              variant="success"
              onClick={() =>
                handleClickButton(1, questionData[questionNo].type)
              }
            >
              {questionData[questionNo].answera}
            </Button>
            <Button
              variant="success"
              onClick={() =>
                handleClickButton(0, questionData[questionNo].type)
              }
            >
              {questionData[questionNo].answerb}
            </Button>
            <CatImg>
              <img
                src="https://www.pngarts.com/files/10/Cat-Transparent-Background-PNG.png"
                alt="catimg"
              />
            </CatImg>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </>
  );
};

export default Question;
