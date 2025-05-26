import { BookData } from "@/types";

const FetchOneBooks = async (id: number): Promise<BookData | null> => {
  let url = `http://localhost:12345/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default FetchOneBooks;
