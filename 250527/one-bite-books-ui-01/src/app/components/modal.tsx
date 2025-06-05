"use client";

import { ReactNode, useRef, useEffect } from "react";
// useRef는 특정요소를 관리하고싶을때 쓰는 hook
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import style from "./modal.module.css";

const Modal = ({ children }: { children: ReactNode }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const router = useRouter();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });
      // scrollTo는 위치값을 설정해준다네-?
    }
  }, []);

  return createPortal(
    <dialog
      onClose={() => router.back()}
      onClick={(e) => {
        if ((e.target as any).nodeName === "DIALOG") {
          router.back();
        }
      }}
      className={style.modal}
      ref={dialogRef}
    >
      <div className={style.modal_content}>{children}</div>
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
};
// createPortal이라는 함수를 가져와 첫번째 인자값에는 dialog 컴포넌트 안에 자식이 될 {children}, 두번째는 부모가 될 요소

export default Modal;
