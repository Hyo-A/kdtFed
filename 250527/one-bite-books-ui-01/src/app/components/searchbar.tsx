"use client";

import React, { useState, useEffect, Suspense } from "react";
// searchbar는 client에게서 값을 받아야 하는 컴포넌트임을 인식시키기 위해
// searchbar에 suspense로 감싼 후에 fallback={<div>Loading...</div>}로 로딩 상태를 설정해줌

import { useRouter, useSearchParams } from "next/navigation";
// useSearchParams()는 Next.js의 next/navigation 훅이고, 서버 컴포넌트에서는 사용할 수 없습니다. 오직 클라이언트 컴포넌트 내에서만 사용할 수 있습니다.
// "use client";를 썼지만 Next.js는 useSearchParams()가 CSR (클라이언트 사이드 렌더링) 상황을 유도하기 때문에, Suspense boundary로 감싸야 합니다.
import { FaSearch } from "react-icons/fa";
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
    <Suspense fallback={<div>Loading...</div>}>
      <div className={style.container}>
        <input
          value={search}
          type="text"
          onChange={onChangeSearch}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>
          <FaSearch />
        </button>
      </div>
    </Suspense>
  );
};

export default Searchbar;
