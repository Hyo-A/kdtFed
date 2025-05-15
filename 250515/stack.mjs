import { LinkedList } from "./linkedList.mjs";

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.insertAt(0, data);
    //insertAt 는 index, data 근데 0번째에 값을 넣는다
  }

  pop() {
    try {
      return this.list.deleteAt(0);
      // 0번째를 제거하겠다
    } catch (e) {
      // 제거할 수 있는 상황 아니면
      return null;
    }
  }

  peek() {
    // 특정 인덱스값을 참조한다
    return this.list.getNodeAt(0);
  }

  isEmpty() {
    return this.list.count === 0;
    // count값이 0과같냐? empty냐?
  }
}

export { Stack };
