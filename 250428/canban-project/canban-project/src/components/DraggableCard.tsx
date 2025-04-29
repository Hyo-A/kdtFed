import React from "react";
// memoization위해 react 찾아옴 이걸로 강화할거
import { Draggable } from "@hello-pangea/dnd";
import styled from "styled-components";

interface DraggingProps {
  isDragging: boolean;
}

const Card = styled.div<DraggingProps>`
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 5px;
  background: ${({ theme, isDragging }) =>
    isDragging ? "dodgerblue" : theme.cardColor};
  box-shadow: ${({ isDragging }) =>
    isDragging ? "0 0 8px rgba(0,0,0,0.3)" : "none"};
`;

interface IDraggableCardProps {
  toDo: string;
  index: number;
  toDoId: number;
}

const DraggableCard = ({ toDo, index, toDoId }: IDraggableCardProps) => {
  return (
    <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
// memo는 react 함수인가봄 이케 강화하면 rerandering이 일어나지 x
