import { Stack, stack } from "./stack.mjs";

const stack = new Stack();

console.log("==== 첫번째 출력 ====");
stack.puch(1);
stack.puch(2);
stack.puch(3);
stack.puch(4);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);

console.log("==== 두번째 출력 ====");
stack.puch(1);
stack.puch(2);
stack.puch(3);
stack.puch(4);
console.log(stack.peek().data);
stack.pop();
console.log(stack.peek().data);
console.log(`isEmpty : ${stack.isEmpty()}`);
stack.pop();
stack.pop();
stack.pop();
console.log(`isEmpty : ${stack.isEmpty()}`);
