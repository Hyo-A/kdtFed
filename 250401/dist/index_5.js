"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchPost = () => {
    return new Promise((resolve, reject) => {
        // promise는 class기 때문에 타입정의 가능!
        // (): Promise<Post> 함수의 반환값의 타입정의를 이케 할 수 있다는 말임
        setTimeout(() => {
            resolve({
                id: 1,
                title: "게시글 제목",
                content: "게시글 본문",
            });
        }, 3000);
    });
}; // 보통 패치함수를 선언형으로 커마하겠다면?
