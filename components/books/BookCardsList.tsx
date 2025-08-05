import { useBooks } from "@/hooks/useBook";
import { router } from "expo-router";
import React from "react";
import { FlatList } from "react-native";
import { BookCard } from "./BookCard";
export const BooksCardsList = () => {
  const { data, isLoading, isError } = useBooks();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <BookCard book={item}  onPress={() => router.push(`/(stack)/book/${item.id}`)}/>}
      className="mx-5"
      showsVerticalScrollIndicator={false}
    />
  );
};
