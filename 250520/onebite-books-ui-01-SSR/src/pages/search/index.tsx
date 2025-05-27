import { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import Head from "next/head";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const {
    query: { q },
  } = context;
  const books = await fetchBooks(q as string);
  return {
    props: { books },
  };
};

const Search = ({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>BOOKS</title>
        <meta property="og:image" content="/thumbnail.jpg" />
        <meta property="og:title" content="한입북스-검색결과" />
        <meta
          property="og:description"
          content="한입북스에 등록된 도서들을 만나보세요!"
        />
      </Head>
      <div>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </>
  );
};

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Search;
