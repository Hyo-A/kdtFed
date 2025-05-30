"use server";

import { revalidateTag } from "next/cache";
import delay from "@/util/delay";

export const createReviewAction = async (_: any, formData: FormData) => {
  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  console.log(bookId, content, author);

  if (!bookId || !author || !content) {
    return {
      status: false,
      error: "리뷰 내용과 작성자를 입력해주세요.",
    };
  }

  try {
    await delay(2000);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_KEY}/review`,
      {
        method: "POST",
        body: JSON.stringify({
          bookId,
          content,
          author,
        }),
      }
    );
    console.log(response.status);
    // 1. 안에 인자값으로 들어가는 url을 알아서 rerandering해줌
    // revalidatePath(`/book/${bookId}`);

    // 2. 특정 경로의 모든 페이지를 재검증
    // revalidatePath(`/book/[id]`, "page");

    // 3. 특정 레이아웃을 갖는 모든 페이지 재검증
    // revalidatePath(`/(with-searchbar)`, "layout");

    // 4. 모든 데이터 재검증
    // revalidatePath(`/`, "layout");

    // 5. 특정 태그 기준, 데이터 캐시 재검증
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    revalidateTag(`review-${bookId}`);
    return {
      status: true,
      error: "",
    };
  } catch (err) {
    console.log(err);
    return {
      status: false,
      error: `리뷰 저장에 실패했습니다. ${err}`,
    };
  }
};
// 실행을 클라이언트에서하고 호출을 서버에서 한다!
