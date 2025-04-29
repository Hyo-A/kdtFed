import { DragDropContext, DropResult } from "@hello-pangea/dnd";
// dropresult거  destination, sourced안에 내장 타입 제공되는게 이거
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { toDoState } from "../atoms";
import Board from "./Board";

const Container = styled.div`
  width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const ToDoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, source }: DropResult) => {
    // console.log(destination, source, draggableId);
    if (!destination) return;
    // 이동을 안했을때의 가정 먼저 해야함

    if (destination?.droppableId === source.droppableId) {
      setToDos((oldToDos) => {
        const boardCopy = [...oldToDos[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        // 내가 없애고자 하는 index로부터 1개
        boardCopy.splice(destination.index, 0, taskObj);
        // 도착하는 index로부터0개에 끼워넣기
        return {
          ...oldToDos,
          [source.droppableId]: boardCopy,
        };
      });
    }

    if (destination.droppableId !== source.droppableId) {
      setToDos((oldToDos) => {
        const sourceBoald = [...oldToDos[source.droppableId]];
        // 출발할때의 board의 배열을 찾아옴
        const destinationBoard = [...oldToDos[destination.droppableId]];
        // 도착아이템의 배열을 찾아옴
        const taskObj = sourceBoald[source.index];

        sourceBoald.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, taskObj);
        return {
          ...oldToDos,
          [source.droppableId]: sourceBoald,
          [destination.droppableId]: destinationBoard,
        };
      });
    } // 이는 다른 보드로 이동을 하는 경우임
  };
  // 이벤트객체를 찾아오듯 onDragEnd는 arguments를 참조변수로 찾아올 수 있다
  // 이 안에는 어떤 공간에서 무엇이 어디로 움직였는지 알려줌
  // destination, source인데 내장 타입 제공되는게 있음

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} boardId={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Container>
    </DragDropContext>
  );
};

export default ToDoList;
