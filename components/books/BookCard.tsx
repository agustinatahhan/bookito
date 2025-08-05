import { Book } from "@/types/book";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { StarRating } from "../rating/StarRating";

type Props = {
  book: Book;
  onPress?: () => void;
};

export const BookCard = ({ book, onPress }: Props) => {
  const imageUrl = book.image || "https://via.placeholder.com/100x150";
  const authors = book.authors || "No author information";
  return (
    <Pressable onPress={onPress}>
      <View className="flex-row gap-5 mb-4 items-center bg-[#f8efe6] px-4 py-3 rounded-xl">
        <Image
          source={{ uri: imageUrl }}
          className="w-[100px] h-[150px] rounded-lg"
        />

        <View className="flex-1 max-w-[220px]">
          <Text
            className="text-xl font-bold text-background-50"
            numberOfLines={3}
            style={{ flexShrink: 1 }}
          >
            {book.title}
          </Text>
          <Text
            className="text-md font-medium text-background-50"
            numberOfLines={3}
            style={{ flexShrink: 1 }}
          >
            {book.authors}
          </Text>

          <StarRating rating={book.averageRating} />
        </View>
      </View>
    </Pressable>
  );
};
