import { useParams, Outlet, Link, useOutletContext } from "react-router-dom";
import { users } from "../db";

interface IDarkMode {
  darkMode: boolean;
}

const User = () => {
  const { userId } = useParams();
  // console.log(typeof userId);
  // params는 useparams의 상속을 받는 인스턴스임
  const { darkMode } = useOutletContext<IDarkMode>();
  // console.log(darkMode);

  return (
    <>
      <h1>
        User with ID {userId} is: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See Followers</Link>
      <Outlet
        context={{
          nameOfMyUser: users[Number(userId) - 1].name,
          darkMode: true,
        }}
      />
    </>
  );
};
// outlet을 통해 생성된 부모 자식 컴포넌트는 값을 주고받을 수 있다는 장점!

export default User;
