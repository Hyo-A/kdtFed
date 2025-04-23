import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// 전역에 reactquery를 쓸 수 있게 설정해놨는데
// 이 페이지에서 이제 쓸거여서 usequery 가져옴
import styled from "styled-components";
import { usePostQuery } from "../usePost";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const ReactQuery = () => {
  const { data, isLoading, isError, error, refetch } = usePostQuery(1);

  // console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    <h1>{error.message}</h1>;
  }
  return (
    <Container>
      {data?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
      <button onClick={refetch}>Posts 리스트 새로고침</button>
    </Container>
  );
};

export default ReactQuery;
