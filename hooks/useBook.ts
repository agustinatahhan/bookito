import { fetchBooks } from "@/services/bookService"
import { Book } from "@/types/book"
import { useQuery } from "@tanstack/react-query"

export const useBooks = () => {
    return useQuery<Book[]>({
        queryKey: ["books"],
        queryFn: fetchBooks,
        staleTime: 1000 * 60
    })
}