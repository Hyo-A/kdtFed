import { Routes, Route, Link } from "react-router-dom";
// Link는 컴포넌트로서, useNavigate는 hook함수로서 작용
// 둘다 링크 이동시키는 역할이긴 하다
// Link는 a태그로 작동한다
import GlobalStyles from "./styles/GlobalStyles.styles";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
