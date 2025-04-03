import GlobalStyles from "./styles/GlobalStyles.styles";

import Form from "./components/Form";

// import mockPost from "./mock/posts.json";

interface Post {
  readonly userId: number;
  readonly id: number;
  readonly title: string;
  readonly body: string;
}

function App() {
  return (
    <>
      <GlobalStyles />
      <Form />
    </>
  );
}

export default App;
