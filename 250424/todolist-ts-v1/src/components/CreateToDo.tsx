import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Span = styled.span`
  color: #f00;
  font-size: 10px;
  margin-top: -5px;
`;

const Input = styled.input`
  height: 30px;
  border: none;
  border-bottom: 1px solid #a5a5a5;
  transition: all 0.2s;
  &:focus {
    outline: none;
    border-bottom: 1.5px solid #000000;
  }
`;

const Button = styled.button`
  background: #000;
  color: #fff;
  margin-bottom: 20px;
`;

interface IForm {
  toDo: string;
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  // state와 비슷한 형태지만 atom 안의 관리중인 초기값을 씀
  // 근데 여기는 todos 필요없음 settodos만 필요해서 usesetrecoilstate 쓰기

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category: "TODO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <Input
        {...register("toDo", { required: "Write Here" })}
        type="text"
        placeholder="write a Todo"
      />
      <Span>{errors.toDo?.message as string}</Span>
      <Button>Add</Button>
    </Form>
  );
};

export default CreateToDo;
