//상태관리 recoil -> atoms
import { atom, selector } from "recoil";

export const minutesState = atom({
  key: "minutes",
  default: 60,
});

export const hourSelector = selector({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minutesState);
    return minutes / 60; //찾아온 minuteStaet의 값을 60으로 나누기
  }, //get은 함수의 형태 -> 값 반환 해야 해서 return필수 -> minutesstate값 찾아올 떄 -> get함수 끌어오기
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minutesState, minutes);

    // set(minutesState, 10); //1.바꾸고자하는state, 2.바꾸고싶은 값
    // console.log(newValue); //사용자가 넣은 값을 출력
  },
});

// get은 atom안 관리 중인 상태값 찾아와 연산하는 역할
// set은 상태관리 값을 무언가의 값으로 바꿔주는 역할
