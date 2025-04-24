import { Outlet } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { darkTheme } from "./theme";
import { isDarkAtom } from "./atoms";
// 얘는 useRecoilValue로 값을 찾아와야하는 과정 필요
// 마치like useSelector

// const Button = styled.button`
//   position: absolute;
//   top: 30px;
//   right: 30px;
//   padding: 8px 14px;
//   border: none;
//   cursor: pointer;
//   border-radius: 20px;
//   color: ${({ theme }) => theme.bgColor};
//   background: ${({ theme }) => theme.accentColor};
//   transition: transform 0.2s;
//   &:hover {
//     transform: scale(1.1);
//   }
// `;

const Root = () => {
  const test = useRecoilValue(isDarkAtom);
  console.log(test);

  // const [isDark, setIsDark] = useState(false);
  // const toggleDark = () => setIsDark((current) => !current);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <ReactQueryDevtools
          initialIsOpen={true}
          buttonPosition="bottom-right"
        />
        {/* <Button onClick={toggleDark}>Change Color</Button> */}
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default Root;
