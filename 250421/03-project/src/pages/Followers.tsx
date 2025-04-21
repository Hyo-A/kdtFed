import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUser: string;
}

const Followers = () => {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();
  // console.log(ctx); // 전달한 요소로 nameofmyuser를 받았다
  return <h1>Here is {nameOfMyUser}'s List of Followers</h1>;
};

export default Followers;
