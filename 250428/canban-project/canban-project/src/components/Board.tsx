import { useForm } from "react-hook-form";
import { Droppable } from "@hello-pangea/dnd";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import DraggableCard from "./DraggableCard";
import { IToDo, toDoState } from "../atoms";

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 2.4rem;
  margin-bottom: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.bgColor};
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  margin-bottom: 10px;
  border-bottom: 1px solid dodgerblue;
  background: transparent;
  transition: all 0.3s;
  color: dodgerblue;
  &:focus {
    outline: none;
    border-bottom: 1px solid var(--dark);
    color: var(--dark);
    &::placeholder {
      color: var(--dark);
    }
  }
  &::placeholder {
    color: dodgerblue;
    transition: all 0.3s;
  }
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  background: ${({ theme }) => theme.bgColor};
  color: var(--light);
  &:hover {
    background: var(--dark);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 394px;
  padding: 20px;
  padding-top: 40px;
  background: url("/cookies.png") center/cover no-repeat;
  border-radius: 8px;
`;

const Area = styled.div<IAreaProps>`
  width: 100%;
  border-radius: 8px;
  padding: 6px;
  transition: background 0.3s;
  background: ${({ isDraggingOver, isDraggingFromThis, theme }) =>
    isDraggingOver
      ? "black"
      : isDraggingFromThis
      ? theme.boardColor
      : "dodgerblue"};
`;

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

interface IBoardProps {
  toDos: IToDo[];
  boardId: string;
}

interface IForm {
  toDo: string;
}

const Board = ({ toDos, boardId }: IBoardProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  // inputRef는 초기값이 null이다

  const onValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBaords) => {
      return {
        ...allBaords,
        [boardId]: [...allBaords[boardId], newToDo],
      };
    });
    setValue("toDo", "");
  };

  return (
    <Container>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("toDo", { required: true })}
          type="text"
          placeholder="Write here"
        />
        <Button>Click</Button>
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard
                key={toDo.id}
                index={index}
                toDo={toDo.text}
                toDoId={toDo.id}
              />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Container>
  );
};

export default Board;
