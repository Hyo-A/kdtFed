import { create } from "zustand";

const counterStore = create((set) => ({
  count: 1,
  increase: () => set((state) => ({ count: state.count + 1 })),
  increaseBy: (num) => set((state) => ({ count: state.count + num })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  // 여기서 state는 위쪽에있는 state를 찾아와
}));
// 객체를 반환할지 그냥 실행문으로서 값을 반환할지 헷갈리지마
// 객체 안에 함수형태면 걔는 메서드함수 나중에 온점표기법으로 쓸 수 있다
// set이라는 참조변수를 가져와야 setstate의 역할을 하게함

export default counterStore;
