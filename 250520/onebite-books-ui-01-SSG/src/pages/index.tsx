import { ReactNode } from "react";
import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchRandomBooks from "@/lib/fetch-random-books";
import fetchBooks from "@/lib/fetch-books";
// 유틸리티 타입이라네? 함수를 타입으로 지정하려고

export const getStaticProps = async () => {
  // 아래 Home 이라는 컴포넌트 보다 무조건 먼저 실행되어서, 컴포넌트에 필요한 데이터를 불러오는 기능을 할 수 있는 함수
  const [recoBooks, allBooks] = await Promise.all([
    fetchRandomBooks(),
    fetchBooks(),
  ]);
  // 이케 promise all을 써서 두개 데이터가 다 왔을때에 함께 병렬방식으로 보여지는거임

  return {
    props: { recoBooks, allBooks },
  };
};

export default function Home({
  allBooks,
  recoBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <section className={style.container}>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section className={style.container}>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
// home은 해당하는 값을 getlayout 할거에요
