import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
`;

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
      navigate("/result");
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
