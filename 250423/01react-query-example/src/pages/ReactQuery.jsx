import React from "react";
import { useQueries, useQuery } from "@tanstack/react-query";
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
  // const { data, isLoading, isError, error, refetch } = usePostQuery(1);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }
  // if (isError) {
  //   <h1>{error.message}</h1>;
  // }

  const ids = [1, 2, 3, 4];

  const fatchPostDetail = (id) => {
    return axios.get(`http://localhost:3000/posts/${id}`);
  };

  const results = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["posts", id],
        queryFn: () => fatchPostDetail(id),
      };
    }),
    // 얘들을 하나로 묶어서 사용하고싶다
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
      };
    },
  });
  // useQuerires? 여러개의 query값을 가지고 오고 싶을 때 쓰면댐

  console.log(results);

  return (
    <>
      {/* <Container>
        {data?.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
        <button onClick={refetch}>Posts 리스트 새로고침</button>
      </Container> */}
      <div></div>
    </>
  );
};

export default ReactQuery;
