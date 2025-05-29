import style from "./book-item-skeleton.module.css";
import Loading2 from "@/app/(with-searchbar)/search/loading2";

const BookItemSkeleton = () => {
  return (
    <div className={style.container}>
      <div className={style.cover_img}>
        <img src="/bluesky.jpg" alt="sky" />
      </div>
      <Loading2 />
    </div>
  );
};

export default BookItemSkeleton;
