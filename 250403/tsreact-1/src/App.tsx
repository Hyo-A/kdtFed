import { useState, useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import Form from "./components/Form";
import Button from "./components/Button";
import Header from "./components/Header";
import BlogPost from "./components/BlogPost";

// import mockPost from "./mock/posts.json";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg-color);
  overflow: scroll;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

interface Post {
  readonly userId: number;
  readonly id: number;
  readonly title: string;
  readonly body: string;
}

function App() {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [showform, setShowForm] = useState(false);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    // setTimeout(() => {
    //   setPosts(mockPost);
    // }, 1000);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.error(error));
  }, []);
  // 마운트 되는 시점에서 해당 사항 진행

  return (
    <Container>
      <Header />
      {posts.map((post) => (
        <BlogPost key={post.id} title={post.title} body={post.body} />
        // 맵을 주면 꼭 키값을 생각해!!
      ))}
      <GlobalStyles />
      <ButtonContainer>
        <Button label={"click"} onClick={() => setShowForm(true)} />
      </ButtonContainer>
      {showform && <Form onClose={() => setShowForm(false)} />}
    </Container>
  );
}

export default App;
