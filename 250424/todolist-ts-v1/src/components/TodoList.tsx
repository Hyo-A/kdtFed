import { useForm } from "react-hook-form";

const TodoList = () => {
  const { register, watch } = useForm();
  // register는 useform 안의 함수로 (name, options = {}) => { 이렇게 생김
  console.log(register("toDo"), watch());
  // 이케 watch랑 같이 씀
  // 아래 input에 전개연산자에 register("toDo")를 넣었더니 toDo라는 객체 안에 있는걸 계속 watch하게 해준다

  return (
    <div>
      <form>
        <input {...register("toDo")} type="text" placeholder="Write a Todo" />
        <input type="submit" value={"Add"} />
      </form>
    </div>
  );
};

export default TodoList;
