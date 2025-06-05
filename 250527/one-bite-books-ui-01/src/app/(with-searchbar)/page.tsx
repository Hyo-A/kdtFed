import { Suspense } from "react";
import BookItem from "../components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";
import delay from "@/util/delay";
import Image from "next/image";

import BookListSkeleton from "../components/skeleton/book-list-skeleton";
import { Metadata } from "next";

// export const dynamic = "force-dynamic";
/*
1. auto : 그냥 컴포넌트가 기본적으로 가지고 있는 속성을 자동으로 진행
(원래 static이었으니깐 static으로 가)
2. force-dynamic : 해당 컴포넌트 페이지를 동적 페이지로 강제할 때
3. force-static : 해당 컴포넌트 페이지를 정적 페이지로 강제할 때
4. error : 만약 특정 컴포넌트 페이지의 돕션을 강제했을 때, 에러가 발생한다면, 해당 에러를 출력


useSearchParams()는 런타임에 클라이언트에서만 사용할 수 있는 동적 기능이에요.
하지만 Next.js는 기본적으로 /search를 정적 페이지로 빌드하려고 했고,
그 과정에서 동적 사용이 감지되자 에러가 난 것입니다.
*/

const Allbooks = async () => {
  await delay(2000);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_KEY}/book`,
    {
      cache: "force-cache",
      // cache: "no-store",
    }
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
  await delay(1500);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_KEY}/book/random`,
    {
      next: {
        revalidate: 3,
      },
    }
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const recoBooks: BookData[] = await response.json();

  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

// export const dynamic = "force-dynamic";
// 여기가 동적페이지여서 데이터를 끌고오지 못해서 에러페이지를 가지고 오지

export const metadata: Metadata = {
  metadataBase: new URL("https://sky-one-bite.vercel.app/"),
  title: "ONE BITE",
  description: "ONE BITE에 등록된 도서를 만나보세요",
  openGraph: {
    title: "ONE BITE",
    description: "ONE BITE에 등록된 도서를 만나보세요",
    images: ["/thumbnail.jpg"],
  },
};

const Home = () => {
  return (
    <div className={style.container}>
      <section>
        <h3>
          <Image width={20} height={20} src="/blueheart.gif" alt="blue heart" />{" "}
          지금 추천하는 도서
        </h3>
        <Suspense fallback={<BookListSkeleton count={3} />}>
          <Recobooks />
        </Suspense>
      </section>
      <section>
        <h3>
          <Image width={20} height={20} src="/blueheart.gif" alt="blue heart" />{" "}
          등록된 모든 도서
        </h3>
        <Suspense fallback={<BookListSkeleton count={10} />}>
          <Allbooks />
        </Suspense>
      </section>
    </div>
  );
};

export default Home;

/* 
Dynamic Page(동적 페이지)로 설정되는 기준

1.캐시되지 않은 Data Fetching을 사용할 경우

no-store --> 다이내믹페이지로 부를 수 있음
const Comp = async() => {
const response = await fetch("...", {cache : "no-store"})

return <div>...</div>
}

2.동적 함수(쿠키, 헤더, 쿼리스트링)를 사용하는 컴포넌트가 존재할 때
import {cookies} from "next/headers"

const Comp = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  return <div>////<div/>
}

동적함수 : 0, 데이터캐시 : X 
동적함수 : 0, 데이터캐시 : 0
동적함수 : X, 데이터캐시 : X 
=> Dynamic Page임

동적함수 : X, 데이터캐시 : 0 
=> Static Page임 (*Full Route Cache 기능을 사용하기 적합)

*/
