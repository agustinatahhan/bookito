import { BookDetail } from "@/types/book";
import axios from "axios";
const { API_KEY } = require("../env.json");

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export const fetchBookDetail = async (id: string): Promise<BookDetail> => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${id}`, {
      params: {
        key: API_KEY,
      },
    });

    return {
      id: data.id,
      title: data.volumeInfo.title,
      authors: data.volumeInfo.authors || ["Unknown"],
      categories: data.volumeInfo.categories
        ? Array.from(
            new Set(
              data.volumeInfo.categories.flatMap((cat: string) =>
                cat.split("/").map((c) => c.trim())
              )
            )
          )
        : [],
      publishedDate: data.volumeInfo.publishedDate,
      description: data.volumeInfo.description,
      pageCount: data.volumeInfo.pageCount,
      language: data.volumeInfo.language,
      image: data.volumeInfo.imageLinks?.thumbnail,
      averageRating: data.volumeInfo.averageRating,
      ratingsCount: data.volumeInfo.ratingsCount,
    };
  } catch (error) {
    console.error("Error fetching book detail", error);
    throw Error;
  }
};
