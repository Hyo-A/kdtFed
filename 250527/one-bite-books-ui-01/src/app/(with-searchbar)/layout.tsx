import { ReactNode, Suspense } from "react";
import Searchbar from "../components/searchbar";
// searchbar는 client에게서 값을 받아야 하는 컴포넌트임을 인식시키기 위해
// searchbar에 suspense로 감싼 후에 fallback={<div>Loading...</div>}로 로딩 상태를 설정해줌

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <div className={style.date}>{new Date().toLocaleString()}</div> */}
        <Searchbar />
      </Suspense>
      {children}
    </>
  );
};

export default Layout;
