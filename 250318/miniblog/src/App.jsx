import GlobalStyles from "./styles/GlobalStyles.styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./components/PAGES/MainPage";
import PostViewPage from "./components/PAGES/PostViewPage";
import PostWriterpage from "./components/PAGES/PostWriterpage";

const MainTitleText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <MainTitleText>미니블로그</MainTitleText>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post-write" element={<PostWriterpage />} />
        <Route path="/post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
