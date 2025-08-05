import { CategoriesTags } from "@/components/categories/Categories";
import { ExpandableDescription } from "@/components/description/ExpandableDescription";
import { StarRating } from "@/components/rating/StarRating";
import { useBooksDetail } from "@/hooks/useBook";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

const BookDetail = () => {
  const { id } = useLocalSearchParams();

  const { data: book, isLoading, isError } = useBooksDetail(id as string);
  const imageUrl = book?.image || "No image";

  const stripHtmlTags = (html: string) => {
    return html.replace(/<[^>]*>/g, "").trim();
  };

  const rawDescription = book?.description || "";
  const cleanDescription = stripHtmlTags(rawDescription);

  return (
    <SafeAreaView className="flex-1 bg-background-base">
      <ScrollView>
        <View className="flex-col mt-4 mx-5">
          {/* Image + title */}
          <View className="flex-row gap-2 max-w-[220px]">
            <Image
              source={{ uri: imageUrl }}
              className="w-[150px] h-[200px] rounded-lg"
            />
            <View className="flex-col mt-5 gap-1">
              <Text
                className="font-bold text-2xl text-background-50"
                numberOfLines={3}
                style={{ flexShrink: 1 }}
              >
                {book?.title}
              </Text>
              <Text className="font-medium text-lg text-background-40 ">
                {book?.authors}
              </Text>
              <StarRating rating={book?.averageRating} />
            </View>
          </View>
          {/* Categories */}
          <View className="mt-4">
            <Text className="font-bold text-background-50 text-xl">
              Categories
            </Text>
            <CategoriesTags categories={book?.categories} />
          </View>
          {/* Description */}
          <View className="mt-4">
            <Text className="font-bold text-background-50 text-xl">
              Description
            </Text>
            <ExpandableDescription description={cleanDescription} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetail;
