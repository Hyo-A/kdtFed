import { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html>
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>🧡 One Bite Books</Link>
          </header>
          <main>{children}</main>
          <footer>제작 @God Hyo Ba</footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
