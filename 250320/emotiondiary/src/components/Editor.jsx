import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import { emotionList, getFormattedDate } from "../util";

const Wrapper = styled.div`
  padding: 20px 0;
`;

const EditorSection = styled.div`
  margin-bottom: 40px;
`;

const EditorTitle = styled.h4`
  font-size: 2.2rem;
  margin-bottom: 10px;
`;

const EditorInfo = styled.div``;

const Input = styled.input`
  border: none;
  border-radius: 4px;
  background: var(--input-color);
  padding: 10px 20px;
  font-size: 2rem;
  font-family: var(--nanum-font);
  cursor: pointer;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  border: none;
  border-radius: 4px;
  background: var(--input-color);
  padding: 20px;
  font-family: var(--nanum-font);
  font-size: 2rem;
  resize: none;
`;

const Emotiongroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2%;
`;

const Buttongroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Editor = ({ initData, onSubmit }) => {
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };

  const handleChangeEmotion = useCallback((emotionId) => {
    setState((state) => ({
      ...state,
      emotionId,
    }));
    // 얘는 컴포넌트가 언마운트 될 때 실행
    // 괄호가 두개인 이유는 실행문 안에 객체를 안아야 하기 때문에 중괄호 두개여야하는데 소괄호로 바뀐거임
  }, []);

  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const handleGoBack = () => {
    navigate(-1);
  }; // useNavigate로 navigate(-1)로 바로 직전 페이지로~

  const handleSubmit = () => {
    onSubmit(state);
  };
  return (
    <Wrapper>
      <EditorSection>
        <EditorTitle>오늘의 날짜</EditorTitle>
        <EditorInfo>
          <Input type="date" value={state.date} onChange={handleChangeDate} />
        </EditorInfo>
      </EditorSection>
      <EditorSection>
        <EditorTitle>오늘의 감정</EditorTitle>
        <Emotiongroup>
          {emotionList.map((it) => (
            <EmotionItem
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === it.id} //state안에 id값이 된것과 it.id가 참이면 이것은 즉슨 선택된 놈을 뜻하게 되는것? 첨에는 3으로 설정해놨음..
            />
          ))}
        </Emotiongroup>
      </EditorSection>
      <EditorSection>
        <EditorTitle>오늘의 일기</EditorTitle>
        <EditorInfo>
          <Textarea
            onChange={handleChangeContent}
            value={state.content}
            placeholder="오늘 하루 어땠나요?"
          />
        </EditorInfo>
      </EditorSection>
      <EditorSection>
        <Buttongroup>
          <Button text="취소하기" onClick={handleGoBack} />
          <Button text="작성완료" type={"positive"} onClick={handleSubmit} />
        </Buttongroup>
      </EditorSection>
    </Wrapper>
  );
};

export default Editor;
