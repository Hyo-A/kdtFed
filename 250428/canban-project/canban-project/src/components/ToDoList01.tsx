import React from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { minutesState, hourSelector } from "../atoms";

/*--- 스타일 ---*/
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Title = styled.h1`
  font-size: 3.6rem;
  /* text-transform: uppercase; */
  font-weight: bold;
  margin-bottom: 10px;
`;
const Input = styled.input`
  background: var(--dark);
  color: var(--light);
  border: none;
  padding: 20px 40px;
  outline: none;
  border-radius: 8px;
  &::placeholder {
    color: var(--light);
  }
`;

/*--- 출력 ---*/
const ToDoList = () => {
  const [minutes, setMinutes] = useRecoilState(minutesState); //인자값: 초기값 = minutesState의 0값 -> setMinutes로 값 변경
  const [hours, setHours] = useRecoilState(hourSelector); //useRecoilValue는 atoms, selector안에 들어간 값 가져올 수 있음

  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  }; //1. Number로 바꿔주기 2. + : 숫자로 바뀜-문법
  //event의 타입정의는 React에서 찾아오기
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };

  return (
    <Container>
      <Title>Canban Board</Title>
      <Input value={minutes} type="number" placeholder="분" onChange={onMinutesChange} />
      <Input value={hours} type="number" placeholder="시간" onChange={onHoursChange} />
      <div>
        {minutes}분은 {hours}시간 입니다.
      </div>
    </Container>
  );
};

export default ToDoList;
