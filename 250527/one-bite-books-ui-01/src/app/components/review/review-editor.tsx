"use client";

import { useActionState, useEffect } from "react";
import { createReviewAction } from "@/actions/create-review-actions";
import style from "./review-editor.module.css";

const ReviewEditor = ({ bookId }: { bookId: string }) => {
  const [state, forAction, isPending] = useActionState(
    createReviewAction,
    null
  );
  // createReviewAction를 상태관리 요소 안에 넣으려면?
  // 첮번째 초기값, 두번째 인자값?

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section>
      <form className={style.form_container} action={forAction}>
        <input type="text" name="bookId" value={bookId} hidden readOnly />
        <div className={style.submit_container}>
          <input
            disabled={isPending}
            type="text"
            name="author"
            placeholder="작성자"
            required
          />
          <input
            disabled={isPending}
            type="submit"
            value={isPending ? "• • •" : "작성하기"}
          />
        </div>
        <textarea
          disabled={isPending}
          name="content"
          placeholder="리뷰내용"
          required
        ></textarea>
      </form>
    </section>
  );
};

export default ReviewEditor;
