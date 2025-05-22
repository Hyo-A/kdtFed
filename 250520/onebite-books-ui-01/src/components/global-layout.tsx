import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header>
        <Link href={"/"}>
          <div style={{ display: "flex" }}>
            <div style={{ padding: 4 }}>
              <Image
                src="/book_14337963.png"
                alt="book"
                width={20}
                height={20}
              />
            </div>
            ONE BITE BOOKS
          </div>
        </Link>
      </header>
      <main>{children}</main>
      <footer>푸터</footer>
    </div>
  );
};

export default GlobalLayout;
