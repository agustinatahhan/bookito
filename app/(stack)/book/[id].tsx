import { ExpandableDescription } from "@/components/description/ExpandableDescription";
import { StarRating } from "@/components/rating/StarRating";
import { useBooksDetail } from "@/hooks/useBook";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

const BookDetail = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { data: book } = useBooksDetail(id as string);
  const imageUrl = book?.image || "https://via.placeholder.com/150x200";

  const stripHtmlTags = (html: string) => {
    return html.replace(/<[^>]*>/g, "").trim();
  };

  const rawDescription = book?.description || "";
  const cleanDescription = stripHtmlTags(rawDescription);

  return (
    <SafeAreaView className="flex-1 bg-background-base">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View className="mt-4 mx-5">
          {/* Header Icons */}
          <View className="flex-row justify-between items-center mb-6">
            <Pressable onPress={() => router.back()}>
              <Ionicons size={28} name="arrow-back-outline" color="#80807e" />
            </Pressable>
            <Ionicons size={24} name="bookmark-outline" color="#a395c9" />
          </View>

          {/* Image */}
          <View className="items-center mb-5">
            <Image
              source={{ uri: imageUrl }}
              className="w-[150px] h-[200px] rounded-xl shadow-md shadow-black/5"
            />
          </View>

          {/* Title & Author */}
          <View className="items-center mb-2">
            <Text className="font-bold text-2xl text-background-50 text-center">
              {book?.title}
            </Text>
            <Text className="font-medium text-base text-background-40 text-center">
              {book?.authors}
            </Text>
          </View>

          {/* Rating */}
          <View className="items-center mt-2 mb-4">
            <StarRating rating={book?.averageRating} />
          </View>

          {/* Extra info: Pages & Views */}
          <View className="flex-row items-center gap-6 mt-2 justify-center mb-4">
            <View className="flex-row items-center gap-1">
              <Ionicons name="book-outline" size={18} color="#a395c9" />
              <Text className="text-sm text-background-40">
                {book?.pageCount}p
              </Text>
            </View>
            <View className="flex-row items-center gap-1">
              <Ionicons name="eye-outline" size={18} color="#a395c9" />
              <Text className="text-sm text-background-40">
                {book?.ratingsCount} views
              </Text>
            </View>
            <View className="flex-row items-center gap-1">
              <Ionicons name="calendar-outline" size={18} color="#a395c9" />
              <Text className="text-sm text-background-40">
                {book?.publishedDate?.substring(0, 4)}
              </Text>
            </View>
          </View>

          {/* Categories */}
          <View className="mt-4">
            <Text className="font-bold text-background-50 text-xl mb-2">
              Categories
            </Text>
            <View className="flex-row flex-wrap gap-2">
              {book?.categories?.map((genre, idx) => (
                <View
                  key={idx}
                  className="bg-foreground-10 px-3 py-1 rounded-full"
                >
                  <Text className="text-sm text-foreground-50">{genre}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Description */}
          <View className="mt-6">
            <Text className="font-bold text-background-50 text-xl mb-2">
              Description
            </Text>
            <Text className="text-base text-background-40 leading-relaxed">
              <ExpandableDescription description={cleanDescription} />
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetail;
