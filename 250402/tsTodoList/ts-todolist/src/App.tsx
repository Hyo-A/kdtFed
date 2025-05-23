import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styles";
import DataView from "./components/DataView";
import InputContainer from "./components/InputContainer";
import { TodoListContextProvider } from "./contexts/TodoListContextProvider";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <TodoListContextProvider>
          <DataView />
          <InputContainer />
        </TodoListContextProvider>
      </Container>
    </>
  );
}

export default App;
