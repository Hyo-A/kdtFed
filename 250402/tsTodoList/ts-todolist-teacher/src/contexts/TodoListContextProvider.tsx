import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const TodoListContextProvider = ({ children }: Props) => {
  return <div>TodoListContextProvider</div>;
};

export default TodoListContextProvider;
