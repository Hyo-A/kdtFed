"use client";

import { useRef, useActionState, useEffect } from "react";
import { deleteReviewAction } from "@/actions/delete-review-action";

const ReviewItemDeleteBtn = ({
  reviewId,
  bookId,
}: {
  reviewId: number;
  bookId: number;
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null
  );
  // isPending는 제거가 되었는지 보여줄수 잇다?

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
      <input type="text" name="reviewId" value={reviewId} hidden readOnly />
      <input type="text" name="bookId" value={bookId} hidden readOnly />
      {isPending ? (
        <div>• • •</div>
      ) : (
        <div onClick={() => formRef.current?.requestSubmit()}>삭제하기</div>
      )}
    </form>
  );
};

export default ReviewItemDeleteBtn;
