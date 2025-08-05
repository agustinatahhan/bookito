import { Book } from "@/types/book";
import axios from "axios";
const { API_KEY } = require("../env.json");

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export const fetchBooks = async (): Promise<Book[]> => {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        q: "subject:romance",
        langRestrict: "en",
        maxResults: 40,
        key: API_KEY,
      },
    });

    if (!data.items) return [];

    return data.items
      .filter((book: any) => {
        const info = book.volumeInfo;
        return info.language === "en";
      })
      .map((book: any) => ({
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors || ["Unknown"],
        categories: book.volumeInfo.categories,
        image: book.volumeInfo.imageLinks?.thumbnail,
        averageRating: book.volumeInfo.averageRating,
      }));
  } catch (error) {
    console.error("Error fetching books", error);
    return [];
  }
};
