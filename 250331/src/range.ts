// 선언형 방식
export const range = (from: number, to: number): number[] => {
  return from < to ? [from, ...range(from + 1, to)] : [];
  // 재귀함수 형태 from이 to보다 작을때 from부터 전개연산자로 +1씩 하여 to까지
};
