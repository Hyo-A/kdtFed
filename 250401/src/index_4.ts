const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => resolve(20), 3000); //settimeout은 인자값2번 시간 후 인자값1번 시행
});
// promise는 두가지 인자값 콜백함수,
// 그 콜백함수는 두가지 인자값 데이터들어오는게 성공했을때, 오류일때 -> resolve, reject경우

promise.then((response) => {
  console.log(response);
}); // then 안에는 resolve되었을때의 값을 가져옴

// promise는 보통 unknown타입이 된다
// new Promise<number>이렇게 제네릭타입으로 정의를 해도 된다

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  } // err는 any타입으로 들어오기 때문에 타입가드로 문자로 바꿔준거임
}); // catch 안에는 reject 값을 가져옴
