import { Book } from "@/types/book";
import axios from "axios";
const { API_KEY } = require("../env.json");

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export const fetchBooks = async (): Promise<Book[]> => {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        q: "subject:fiction",
        orderBy: "newest",
        langRestrict: "en",
        maxResults: 20,
        key: API_KEY,
      },
    });

    if (!data.items) return [];

    return data.items
      .filter((book: any) => book.volumeInfo.language === "en")
      .map((book: any) => ({
        id: book.id,
        title: book.volumeInfo.title,
        categories: book.volumeInfo.categories,
        image: book.volumeInfo.imageLinks?.thumbnail,
        averageRating: book.volumeInfo.averageRating,
      }));
  } catch (error) {
    console.error("Error fetching books", error);
    throw error;
  }
};
