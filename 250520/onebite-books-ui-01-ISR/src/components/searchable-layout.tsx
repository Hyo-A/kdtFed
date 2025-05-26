import React, { ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/router";
// useRouter 특정 컴포넌트로 값을 보내기 위해 가져왔다
import style from "./searchable-layout.module.css";
import { FaSearch } from "react-icons/fa";

const SearchableLayout = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const q = router.query.q as string;
  // 문자라고 타입단언해줘야함

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit(event);
    }
  };
  // input애 특정 key를 onkeydown 한 경우에 onsubmit을 하게되는것

  return (
    <div>
      <div>
        <form onSubmit={onSubmit} className={style.searchbar_container}>
          <input
            value={search}
            type="text"
            onKeyDown={onKeyDown}
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요."
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "검색어를 입력하세요.")}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
        {children}
      </div>
    </div>
  );
};

export default SearchableLayout;
