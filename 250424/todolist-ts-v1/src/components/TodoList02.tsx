import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Span = styled.span`
  font-size: 10px;
  margin-top: -6px;
  color: #f00;
`;

interface IFormContents {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  repassword: string;
  userName: string;
  extraError: string;
}

const TodoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<IFormContents>({
    defaultValues: { email: "@google.com" },
    // 모든 register의 초기값을 default로 설정
  });
  // useForm에 유추되는 형태를 register, hand... 등에게 다 적용
  // 구조분해할당으로 이런 형태들이 상속되기 때문이다

  const onVaild = (data: IFormContents) => {
    console.log(data);
    if (data.password !== data.repassword) {
      setError("password", { message: "Password is not the same" });
      setError(
        "repassword",
        { message: "Repassword is not the same" },
        { shouldFocus: true }
        //보통 비밀번호 재입력에 focus를 찝어줌
      );
    }
    // setError("extraError", { message: "Server Offline" });
    setValue("email", "test");
  };
  // 그럼 이제 data가 IFormContens인게 정당한 일이되는거지

  // alert(errors.extraError?.message as string);
  // 실제로는 뭐 에러가 404 떳을때를 if문으로 걸어서 써줘야함
  console.log(errors);

  return (
    <Form onSubmit={handleSubmit(onVaild)}>
      <input
        {...register("email", {
          required: true,
          pattern: {
            value: /^[A-Za-z0-9]+@google.com/gm,
            message: "Only google.com is available",
          },
        })}
        type="email"
        placeholder="@google로 입력해주세요"
      />
      <Span>{errors.email?.message as string}</Span>
      <input
        {...register("firstName", {
          required: "firstname is required",
          validate: (value) =>
            !value.includes("test") ? true : "No test arrowed",
          // text가 있으면? false를 반환하게 된다 test 대신 욕설이 있으면 거를 수 있는 기능 가능
        })}
        type="text"
        placeholder="FirstName"
      />
      <Span>{errors.firstName?.message as string}</Span>
      <input
        {...register("lastName", { required: "lastname is required" })}
        type="text"
        placeholder="lastName"
      />
      <Span>{errors.lastName?.message as string}</Span>
      <input
        {...register("userName", { required: false, maxLength: 6 })}
        type="text"
        placeholder="UserName"
      />
      <Span>{errors.userName?.message as string}</Span>
      <input
        {...register("password", {
          required: "password is 8 required",
          minLength: {
            value: 4,
            message: "8 word is required",
          },
        })}
        type="text"
        placeholder="Password"
      />
      <Span>{errors.password?.message as string}</Span>
      <input
        {...register("repassword", {
          required: "password is 8 required",
          minLength: {
            value: 4,
            message: "8 word is required",
          },
        })}
        type="text"
        placeholder="Repassword"
      />
      <Span>{errors.repassword?.message as string}</Span>
      <button>Add</button>
      {/* <Span>{errors.extraError?.message as string}</Span> */}
    </Form>
  );
};

export default TodoList;
