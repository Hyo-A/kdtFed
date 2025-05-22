import React from "react";
import { useRouter } from "next/router";

const Book = () => {
  const {
    query: { id },
  } = useRouter();
  console.log(id);

  // const router = useRouter();
  // console.log(router);

  return <div>Book Index {id}</div>;
};

export default Book;
// ...id는 뒤에 query가 여러개 붙어도 되는거라는거
// [[]] 이케 중첩대괄호를 쓰면 본인 스스로도 인식이 되어진다
