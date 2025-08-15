import { BooksCardsList } from "@/components/books/BookCardsList";
import { SearchBar } from "@/components/searchBar/SearchBar";
import { useBooks, useBookSearch } from "@/hooks/useBook";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Keyboard, SafeAreaView } from "react-native";

const Home = () => {
  const [query, setQuery] = useState("");
  const isSearching = query.trim().length > 0;
  const { data: searchResults, isLoading: searchLoading } =
    useBookSearch(query);
  const { data: defaultBooks, isLoading: booksLoading } = useBooks();

  const books = isSearching ? searchResults : defaultBooks;
  const isLoading = isSearching ? searchLoading : booksLoading;

  useEffect(() => {
    if (query.trim() === "") {
      Keyboard.dismiss();
    }
  }, [query]);
  return (
    <SafeAreaView className="flex-1 bg-background-base">
      {/* <Text className="font-bold text-3xl text-foreground-base mt-4 mb-8 mx-5">
        Bookito
      </Text> */}
      <SearchBar query={query} onChange={setQuery} />
      {isLoading && (
        <ActivityIndicator size="small" color="#67598a" className="mt-4" />
      )}
      <BooksCardsList books={books} />
    </SafeAreaView>
  );
};

export default Home;
