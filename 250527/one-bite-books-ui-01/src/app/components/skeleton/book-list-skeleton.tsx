import BookItemSkeleton from "./book-item-skeleton";

const BookListSkeleton = ({ count }: { count: number }) => {
  return new Array(count)
    .fill(0)
    .map((_, index) => <BookItemSkeleton key={index} />);
};

export default BookListSkeleton;
