import { BookData } from "@/types";

const FetchOneBooks = async (id: number): Promise<BookData | null> => {
  const url = `https://onbite-books-server-self.vercel.app/book/${id}`;

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
