// 중복되는 값을 허용할 것인가, 허용하지 않을것인가!
// Map() => 값을 추가하고자 할 때 set()
// Map => 객체와 배열의 장점만 추출을 해왔음
// Set => 배열처럼 단일값으로만 내부 요소를 정의!!

const numSet1 = new Set();

numSet1.add("one").add("two").add("three");
// Set으로 정의한 요소에는 .set 말고 .add로 쓰기

console.log(numSet1.has("four"));
console.log(numSet1.has("three"));

console.log(numSet1.keys()); // 얘는 키도 밸류도 없이 그냥 단일값이기 때문에
console.log(numSet1.values()); // 뭘로 찾아오든 상관X
console.log(numSet1.entries()); //

numSet1.delete("three");

numSet1.clear();

console.log(numSet1);
console.log(numSet1.size);
