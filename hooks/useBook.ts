import { fetchBookDetail } from "@/services/bookDetailService"
import { fetchBookSearch } from "@/services/bookSearch"
import { fetchBooks } from "@/services/bookService"
import { Book, BookDetail } from "@/types/book"
import { useQuery } from "@tanstack/react-query"

export const useBooks = () => {
    return useQuery<Book[]>({
        queryKey: ["books"],
        queryFn: fetchBooks,
        staleTime: 1000 * 60
    })
}

export const useBooksDetail = (id: string) => {
    return useQuery<BookDetail>({
        queryKey: ["books", id],
        queryFn: () => fetchBookDetail(id),
        staleTime: 1000 * 60
    })
}

export const useBookSearch = (query: string) => {
    return useQuery<Book[]>({
        queryKey: ["books", query],
        queryFn: () => fetchBookSearch(query),
        enabled: query.trim().length > 0,
        staleTime: 1000 * 60 * 5
    })
}