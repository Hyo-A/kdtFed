import emotion1 from "./imgs/emotion1.png";
import emotion2 from "./imgs/emotion2.png";
import emotion3 from "./imgs/emotion3.png";
import emotion4 from "./imgs/emotion4.png";
import emotion5 from "./imgs/emotion5.png";

export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
};

export const emotionList = [
  {
    id: 1,
    name: "완전좋음",
    img: getEmotionImgById(1),
  },
  {
    id: 2,
    name: "좋음",
    img: getEmotionImgById(2),
  },
  {
    id: 3,
    name: "그럭저럭",
    img: getEmotionImgById(3),
  },
  {
    id: 4,
    name: "나쁨",
    img: getEmotionImgById(4),
  },
  {
    id: 5,
    name: "완전나쁨",
    img: getEmotionImgById(5),
  },
];

export const getFormattedDate = (targetDate) => {
  const year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  let hours = targetDate.getHours();
  let minutes = targetDate.getMinutes();
  let seconds = targetDate.getSeconds();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;
  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
}; // 인자값으로 들어온 날자정보를 출력해주는 역할

export const getMonthRangeByDate = (date) => {
  const beginTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getTime();
  // ex> 2025 3월 21일이라면?
  // beginTimeStamp은 2025 3 1 를 찍는다

  const endTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();
  // endTimeStamp은 2025 3+1 0일 23시 59분 59초

  return { beginTimeStamp, endTimeStamp };
};

export const setPageTitle = (title) => {
  const titleElement = document.getElementsByTagName("title")[0];
  titleElement.innerText = title;
};
