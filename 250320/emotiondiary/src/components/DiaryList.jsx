import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DiaryItem from "./DiaryItem";
import Button from "./Button";

const DiaryContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 20px 0;
`;

const LeftContents = styled.div`
  flex: 1;
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  background: var(--input-color);
  border: none;
  border-radius: 4px;
  font-size: 2rem;
  font-family: var(--nanum-font);
  text-align: center;
  padding: 0 20px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const RightContents = styled.div`
  flex: 3;
  & > button {
    width: 100%;
  }
`;

const ListContents = styled.div``;

const sortOptionList = [
  {
    value: "latest",
    name: "최신순",
  },
  {
    value: "oldest",
    name: "오래된순",
  },
];

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };

    const copyList = JSON.parse(JSON.stringify(data));
    // data는 배열인데 문자열화시키고, 배열화시켜서 복제데이터를 만드는거임
    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const onClickNew = () => {
    navigate("/new");
  };

  return (
    <>
      <DiaryContents>
        <LeftContents>
          <Select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </Select>
        </LeftContents>
        <RightContents>
          <Button text="새 일기 쓰기" type="positive" onClick={onClickNew} />
        </RightContents>
      </DiaryContents>
      <ListContents>
        {sortedData.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </ListContents>
    </>
  );
};

export default DiaryList;
