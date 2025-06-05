import { ReactNode } from "react";
import Link from "next/link";
import style from "./layout.module.css";

const Layout = ({
  children,
  sidebar,
  feed,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  feed: ReactNode;
}) => {
  return (
    <div>
      <div>
        <Link href={"/parallel"} className={style.navigate}>
          parallel
        </Link>
        <Link href={"/parallel/setting"} className={style.navigate}>
          parallet/setting
        </Link>
      </div>
      <br />
      {sidebar}
      {children}
      {feed}
    </div>
  );
};

export default Layout;
