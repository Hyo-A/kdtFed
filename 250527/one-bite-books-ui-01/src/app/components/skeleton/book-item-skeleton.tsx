import style from "./book-item-skeleton.module.css";
import Loading2 from "@/app/(with-searchbar)/search/loading2";
import Image from "next/image";

const BookItemSkeleton = () => {
  return (
    <div className={style.container}>
      <div className={style.cover_img}>
        <Image
          src="/bacl.jpg"
          alt="sky"
          width={80}
          height={105}
          className={style.img}
        />
      </div>
      <Loading2 />
    </div>
  );
};

export default BookItemSkeleton;
