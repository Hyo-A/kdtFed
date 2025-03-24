import { useParams, useNavigate } from "react-router-dom";
// usePararm를 활용해서 상단에 있는 동적파라미터를 찾아올거야
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../components/hooks/useDiary";
import { getFormattedDate } from "../util";

const Diary = () => {
  const { id } = useParams();

  const data = useDiary(id);
  // data 안에서는 모든 일기의 그 정보들이 들어있는중
  // 근데 우리는 id값에 매칭되는 녀석만 찾아와야함
  // 아이디는 가변값이다, 뭐가 걸릴지 모름 // 아이디 값에 따라 데이터도 바뀜
  // useEffect 를 사용해서 업데이트를 제어

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const { date, emotionId, content } = data;
    // 구조분해할당으로 data의 값을 꺼내올것임

    const title = `${getFormattedDate(new Date(Number(date)))} 기록`;

    return (
      <div>
        <Header
          title={title}
          leftChild={
            <Button text={"< 뒤로가기"} onClick={goBack} type="yellow" />
          }
          rightChild={
            <Button text={"수정하기"} onClick={goEdit} type="positive" />
          }
        />
        <Viewer content={content} emotionId={emotionId} />
      </div>
    );
  }
};

export default Diary;
