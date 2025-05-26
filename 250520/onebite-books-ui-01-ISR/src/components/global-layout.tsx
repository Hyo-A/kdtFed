import { ReactNode } from "react";
import Link from "next/link";
import { RiBookmark3Fill } from "react-icons/ri";
import style from "./global-layout.module.css";

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>
          <div style={{ display: "flex" }}>
            <div style={{ padding: 4 }}>
              <RiBookmark3Fill style={{ color: "#00c6e0", fontSize: 22 }} />
            </div>
            ONE BITE BOOKS
          </div>
        </Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>제작 @God HyoBa</footer>
    </div>
  );
};

export default GlobalLayout;
