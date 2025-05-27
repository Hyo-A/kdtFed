import { BookData } from "@/types";

const fetchOneBooks = async (id: number): Promise<BookData | null> => {
  const url = `http://localhost:12345/book/${id}`;

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

export default fetchOneBooks;
