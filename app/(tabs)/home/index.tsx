import { BooksCardsList } from "@/components/books/BookCardsList";
import React from "react";
import { SafeAreaView, Text } from "react-native";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-background-base">
      <Text className="font-bold text-3xl text-foreground-base mt-4 mb-8 mx-5">
        Bookito
      </Text>
      <BooksCardsList />
    </SafeAreaView>
  );
};

export default Home;
