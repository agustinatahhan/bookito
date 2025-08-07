import { Book } from "@/types/book";
import { router } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { BookCard } from "./BookCard";

type Props = {
  books?: Book[];
};

export const BooksCardsList = ({ books = [] }: Props) => {
  if (!books.length) {
    return (
      <View className="mt-10 items-center">
        <Text className="text-background-40 text-base">No results found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={books}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <BookCard
          book={item}
          onPress={() => router.push(`/(stack)/book/${item.id}`)}
        />
      )}
      className="mx-5"
      contentContainerStyle={{ paddingBottom: 60 }}
      showsVerticalScrollIndicator={false}
    />
  );
};
