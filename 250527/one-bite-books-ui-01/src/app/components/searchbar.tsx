"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./searchbar.module.css";

const Searchbar = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
    // push는 인자값으로 url을 넣어야하는데 `/search?q=${search}`
    // 우리는 search 뒤에 우리가 search한값을 넣어서 router에다가 보내주는거
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className={style.container}>
      <input
        value={search}
        type="text"
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
      />
      <input onClick={onSubmit} type="submit" value="🔍" />
    </div>
  );
};

export default Searchbar;
