const fibonacci = (n) => {
  if (n === 0 || n === 1) return n;
  return fibonacci(n - 2) + fibonacci(n - 1);
};
// 얘는 무한으로 계산계산 반복

const fibonacci2 = (n, memo) => {
  if (n === 0 || n === 1) return n;

  if (memo[n] === undefined) {
    memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
  }
  return memo[n];
};
// 얘는 값이 들어오지만 않는다면 memo[n]를 가져와서 쭉쭉 실행

let start = new Date();

console.log(fibonacci(40));

let end = new Date();

console.log(`fibonacci 함수 실행시간 : ${end - start}ms`);

start = new Date();

console.log(fibonacci2(40, []));

end = new Date();

console.log(`fibonacci2 함수 실행시간 : ${end - start}ms`);
