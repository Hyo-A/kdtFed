import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import Box from "./components/Box";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const BoxGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Button = styled.button`
  color: var(--light-color);
  width: 80px;
  height: 80px;
  font-family: "Ownglyph_ParkDaHyun";
  font-size: 3rem;
  cursor: pointer;
  border: none;
  border-radius: 40px;
  transition: all 0.3s;
  &:first-child {
    background: #20bbcf;
  }
  &:nth-child(2) {
    background: #e74f96;
  }
  &:last-child {
    background: #f0bd31;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const choice = {
  scissors: {
    name: "가위",
    img: "../public/RockSessorsPaper-03.jpg",
  },
  rock: {
    name: "바위",
    img: "../public/RockSessorsPaper-01.jpg",
  },
  paper: {
    name: "보",
    img: "../public/RockSessorsPaper-02.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "비겼습니다!🤞";
    } else if (user.name === "바위") {
      return computer.name === "가위" ? "이겼습니다!👑" : "졌습니다!😥";
    } else if (user.name === "가위") {
      return computer.name === "보" ? "이겼습니다!👑" : "졌습니다!😥";
    } else if (user.name === "보") {
      return computer.name === "바위" ? "이겼습니다!👑" : "졌습니다!😥";
    }
  };

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    // Object.keys는 객체를 받으면 그 안의 카들만 배열로 반환해줌
    const randomItem = Math.floor(Math.random() * itemArray.length);
    // random은 1 아래의 값 randomItem은 결국 0,1,2 중 랜덤 한가지를 반환
    const final = itemArray[randomItem];
    // final은 그니깐 choice 의 키들중 랜덤인덱스인 애를 찝어줌
    return choice[final];
  };

  const play = (userSelect) => {
    setUserSelect(choice[userSelect]);
    const computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userSelect], computerChoice));
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <BoxGroup>
          <Box title="You" item={userSelect} result={result} />
          <Box title="Computer" item={computerSelect} result={result} />
        </BoxGroup>
        <ButtonGroup>
          <Button onClick={() => play("scissors")}>가위</Button>
          <Button onClick={() => play("rock")}>바위</Button>
          <Button onClick={() => play("paper")}>보</Button>
        </ButtonGroup>
      </Container>
    </>
  );
}

export default App;
