import BookPage from "@/app/book/[id]/page";
import Modal from "@/app/components/modal";

const page = (props: any) => {
  return (
    <div>
      <Modal>
        <BookPage {...props} />
      </Modal>
    </div>
  );
};

export default page;
