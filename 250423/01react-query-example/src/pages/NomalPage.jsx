import React, { useState, useEffect } from "react";
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

const NomalPage01 = () => {
  const { data, isLoading, error, isError } = usePostQuery();

  if (isLoading) {
    return <Container>Loading...</Container>;
  } else {
    return (
      <Container>
        {data?.map((item) => (
          <div key={item.id}> {item.title}</div>
        ))}
      </Container>
    );
  }
};

export default NomalPage01;
