import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styles";
import DataView from "./components/DataView";
import TextInput from "./components/TextInput";
import Button from "./components/Button";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const mockData = ["React공부하기", "운동하기", "책읽기", "도시락 싸기"];

function App() {
  const [todoList, setTodoList] = useState(mockData);

  const [todo, setTodo] = useState("");

  const onDelete = (todo: string) => {
    setTodoList(todoList.filter((item) => item !== todo));
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <DataView todoList={todoList} onDelete={onDelete} />
        <TextInput value={todo} onChange={setTodo} />
        <Button label="추가" color="#5630fe" />
      </Container>
    </>
  );
}

export default App;
