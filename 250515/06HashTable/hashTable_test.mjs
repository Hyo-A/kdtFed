import { HashTable } from "../hashTable.mjs";

let hashTable = new HashTable();

hashTable.set(1, "김다예");
hashTable.set(4, "이성일");
hashTable.set(20, "황예진");
hashTable.set(6, "김소연");
hashTable.set(22, "송명관");
hashTable.set(21, "장효아");
hashTable.set(5, "정재기");
hashTable.set(10, "정휘찬");
hashTable.set(9, "현윤섭");
hashTable.set(8, "최다연");
hashTable.set(14, "강동호");

console.log(`1 : ${hashTable.get(1)}`);
hashTable.remove(1);
console.log(`1 : ${hashTable.get(1)}`);
console.log(`21 : ${hashTable.get(21)}`);
