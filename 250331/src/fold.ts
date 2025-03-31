export const fold = <T>(
  array: T[], // 1> 배열을 받고
  callback: (result: T, val: T) => T, // 2> 콜백함수를 받고
  initValue: T // 3> 초기값을 받는다
) => {
  let result: T = initValue; // 일단 초기값을 넣는다
  for (let i = 0; i < array.length; ++i) {
    const value = array[i];
    result = callback(result, value);
  }
  return result;
};
