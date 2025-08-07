import { Book } from "@/types/book";
import { Ionicons } from "@expo/vector-icons";
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
      <View className="flex-row gap-4 mb-4 bg-white px-3 py-4 rounded-2xl shadow-sm shadow-background-20/20">
        <Image
          source={{ uri: imageUrl }}
          className="w-[80px] h-[120px] rounded-xl"
        />

        <View className="flex-1 justify-between">
          <View>
            <Text
              className="text-xl font-semibold text-background-50"
              numberOfLines={2}
            >
              {book.title}
            </Text>
            <Text className="text-sm text-background-40 mb-2" numberOfLines={1}>
              {authors}
            </Text>
          </View>

          <View className="flex-row flex-wrap gap-2 mb-2">
            {book.categories?.map((genre, idx) => (
              <View
                key={idx}
                className="bg-foreground-10 px-2 py-1 rounded-full"
              >
                <Text className="text-xs text-foreground-50">{genre}</Text>
              </View>
            ))}
          </View>

          <StarRating rating={book.averageRating} />
        </View>

        <Ionicons name="bookmark-outline" size={22} color="#c2b3ea" />
      </View>
    </Pressable>
  );
};
