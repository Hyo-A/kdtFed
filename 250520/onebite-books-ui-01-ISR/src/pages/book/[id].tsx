import React from "react";
import style from "./[id].module.css";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import FetchOneBooks from "@/lib/fetch-one-books";
import { useRouter } from "next/router";

// const mockData = {
//   id: 2,
//   title: "러닝스쿨! 자바스크립트 첫걸음",
//   subTitle: "처음 프로그래밍을 시작하는 입문자의 눈높이에 맞춘",
//   description:
//     "실무에 꼭 필요한 자바스크립트 필수 지식과 핵심 기술을 가장 쉽게 설명한 입문서!\n\n《러닝스쿨! 자바스크립트 첫걸음》은 자바스크립트의 기초부터 프런트엔드 개발의 최신 트렌드까지 웹 개발을 시작하려는 분들에게 필수적인 지식을 제공하는 책입니다. 현재 가장 인기 있는 기술인 React.js와 Next.js를 배우고 싶은 초보자부터, 이미 이 기술들을 다루고 있는 개발자 모두에게 적합합니다. \n\n실무에서 자주 사용되는 문법들을 위주로, 이해하기 쉬운 예제와 명확한 설명으로 기초적인 개념부터 심화 내용까지 단계별로 배울 수 있고, 이를 활용해 프로젝트를 개발하는 과정까지 다양한 예제와 친절한 설명으로 쉽게 이해할 수 있도록 도와주는 책입니다. 《러닝스쿨! 자바스크립트 첫걸음》을 통해 웹 개발에 첫걸음을 내딛어 보길 바랍니다.",
//   author: "김효빈",
//   publisher: "위키북스",
//   coverImgUrl:
//     "https://shopping-phinf.pstatic.net/main_4731061/47310617618.20240426090954.jpg",
// };

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
    // fallback : 옵션 3가지 (*존재하지 않는 페이지 없음 ) & blocking (*최초에는 없는 페이지로 간주하거나, 즉시 SSR 방식으로 변화해서 해당 페이지를 생성) & true(* 즉시생성 + 페이지만 미리 반환)
    // fallback: "blocking",
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;
  const book = await FetchOneBooks(Number(id));
  if (!book) {
    return {
      notFound: true,
    };
  }
  return {
    props: { book },
  };
};

const Book = ({ book }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) return "로딩중입니다...";

  if (!book) return "문제가 발생했습니다! 다시 실행해주세요.";

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;
  return (
    <div>
      <div
        className={style.cover_img_containers}
        style={{ backgroundImage: `url("${coverImgUrl}")` }}
      >
        <img src={coverImgUrl} alt="cover" />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
};

export default Book;
// ...id는 뒤에 query가 여러개 붙어도 되는거라는거
// [[]] 이케 중첩대괄호를 쓰면 본인 스스로도 인식이 되어진다
