type Person = {
  name: string;
  age: number;
};

const func = (value: string | number | Date | Person) => {
  // value.toUpperCase(); // 이거는 문자 전용 메서드 함수 사용시 오류이다
  // value.toFixed(); // 이거는 숫자 전용 메서드 함수 사용시 오류이다
  // console.log(value.name); // 이거는 오류 // 타입가드를 줘야지
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } // 이것을 타입가드라고 부른디ㅏ
  else if (value instanceof Date) {
    console.log(value.getFullYear);
  } // 인스턴스 객체애 내한 value는 이렇게 찾아돌 수 있다
  else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
};

func("value");
