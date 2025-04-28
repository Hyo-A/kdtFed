import GlobalStyles from "./styles/GlobalStyles.styles";
import ToDoList from "./components/ToDoList";

// import styled from "styled-components";

/*--- 스타일 ---*/
// const Container = styled.div``;

/*--- 출력 ---*/
function Root() {
  return (
    <>
      <GlobalStyles />
      <ToDoList />
    </>
  );
}

export default Root;
