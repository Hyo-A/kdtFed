import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

const { Kakao } = window;
// 이거는 kakao 문법이다 SDK 설치도 잊지말자

const KakaoShareButton = ({ data }) => {
  const url = "https://catmbti-hb.netlify.app/";
  const resultURL = window.location.href;

  useEffect(() => {
    Kakao.cleanup();
    // 앞단의 캐쉬값 초기화
    Kakao.init("187e3c94136aa97c89299bab5e0822c2");
    // 내 키값으로 초기화되는거
    Kakao.isInitialized();
    // 초기화 잘 되었는지 확인해주는거
  }, []);

  const sharekakao = () => {
    console.log(data);

    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "예비 집사 판별기 결과",
        description: `예비 집사님이 고양이를 키운다면, 잘 맞는 고양이는 ${data.name}입니다.`,
        imageUrl: `${url}${data.image}`,
        link: {
          mobileWebUrl: resultURL,
          webUrl: resultURL,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };
  return (
    <Button variant="dark" onClick={sharekakao}>
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoShareButton;
