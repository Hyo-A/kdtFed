import { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";
import type { BookData } from "@/types";

const Footer = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_KEY}/book`,
    {
      cache: "force-cache",
    }
  );
  if (!response.ok) {
    return <footer>제작 @God Hyo-Ba</footer>;
  }
  const books: BookData[] = await response.json();
  const bookCount = books.length;

  return (
    <footer>
      <div>제작 @God Hyo-Ba</div>
      <div>{bookCount}개의 도서가 등록되어 있습니다.</div>
    </footer>
  );
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html>
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>
              <img src="/blueheart.gif" alt="blue heart" />
              ONE BITE BOOKS
            </Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
