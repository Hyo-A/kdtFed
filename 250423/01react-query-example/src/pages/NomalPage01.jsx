import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const NomalPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const fetchPost = async () => {
    const url = "http://localhost:3000/posts";
    const response = await fetch(url);
    const data = await response.json();
    setIsLoading(false);
    setData(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

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

export default NomalPage;
