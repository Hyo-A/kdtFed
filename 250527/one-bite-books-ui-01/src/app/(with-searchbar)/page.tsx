import BookItem from "../components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";

const Allbooks = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_KEY}/book`
  );
  const allBooks: BookData[] = await response.json();
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

const Recobooks = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_KEY}/book/random`
  );
  const recoBooks: BookData[] = await response.json();
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className={style.container}>
      <section>
        <h3>💛 지금 추천하는 도서</h3>
        <Recobooks />
      </section>
      <section>
        <h3>💛 등록된 모든 도서</h3>
        <Allbooks />
      </section>
    </div>
  );
};

export default Home;
