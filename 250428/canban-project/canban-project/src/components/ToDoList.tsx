import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
// dropresult거  destination, sourced안에 내장 타입 제공되는게 이거
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { toDoState } from "../atoms";

const Container = styled.div`
  width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f00;
`;

const Boards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Board = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  padding: 20px;
  padding-top: 40px;
  background: ${({ theme }) => theme.boardColor};
  border-radius: 8px;
`;

const Card = styled.div`
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 5px;
  background: ${({ theme }) => theme.cardColor};
`;

const ToDoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if (!destination) return;

    setToDos((oldToDos) => {
      const copyToDos = [...oldToDos];
      copyToDos.splice(source.index, 1);
      copyToDos.splice(destination.index, 0, draggableId);
      return copyToDos;
    });
  };
  // 이벤트객체를 찾아오듯 onDragEnd는 arguments를 참조변수로 찾아올 수 있다
  // 이 안에는 어떤 공간에서 무엇이 어디로 움직였는지 알려줌
  // destination, source인데 내장 타입 제공되는게 있음

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Boards>
          <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((toDo, index) => (
                  <Draggable key={toDo} draggableId={toDo} index={index}>
                    {(magic) => (
                      <Card
                        ref={magic.innerRef}
                        {...magic.draggableProps}
                        {...magic.dragHandleProps}
                      >
                        {toDo}
                      </Card>
                    )}
                  </Draggable>
                ))}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Container>
    </DragDropContext>
  );
};

export default ToDoList;
