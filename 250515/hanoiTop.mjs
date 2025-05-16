// A, B, C

// A => 원반1, 원번2, 원반3

/*
A=> 원반1, 원번2, 원반3 | B=>  | C=>
A=> 원반1, 원번2 | B=> | C=> 원반3 
A=> 원반1 | B=> 원번2 | C=> 원반3 
A=>  | B=> 원번2 | C=> 원반3, 원반1 

A=> 원번2 | B=> | C=> 원반3, 원반1 
A=> 원번2 | B=> 원반1  | C=> 원반3

A=> | B=> 원반1, 원번2  | C=> 원반3
A=> | B=> 원반1, 원번2, 원반3  | C=>

  7번 움직이게 해딱

*/

const hanoi = (count, from, temp, to) => {
  if (count === 0) return;
  hanoi(count - 1, from, to, temp);
  console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, temp, to, from);
};
hanoi(3, "A", "B", "C");
