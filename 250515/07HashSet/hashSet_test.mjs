import { HashSet } from "./hashSet.mjs";
let hashSet = new HashSet();
console.log(`isEmply : ${hashSet.isEmpty()}`);

console.log("=== add() ===");
hashSet.add(1);
hashSet.add(1);
hashSet.add(123);
hashSet.add(143);
hashSet.printAll();

console.log("=== isContain() ===");
console.log(`isContain : ${hashSet.isContain(1)}`);

console.log("=== remove() ===");
hashSet.remove(1);
hashSet.printAll();
console.log(`isContain : ${hashSet.isContain(1)}`);

console.log("=== clear() ===");
hashSet.clear();
hashSet.printAll();
console.log(`isEmply : ${hashSet.isEmpty()}`);
