import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

type Props = {
  rating?: number;
};

export const StarRating = ({ rating }: Props) => {
  if (rating === undefined) {
    return <Text className="text-md mt-2 text-gray-400">No rating</Text>;
  }

  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const totalStars = 5;

  return (
    <View className="flex-row items-center gap-1 mt-2 ">
      {Array.from({ length: totalStars }, (_, i) => {
        if (i < fullStars) {
          return <Ionicons key={i} name="star" size={20} color="#FFD700" />;
        } else if (i === fullStars && halfStar) {
          return <Ionicons key={i} name="star-half" size={20} color="#FFD700" />;
        } else {
          return <Ionicons key={i} name="star-outline" size={20} color="#FFD700" />;
        }
      })}
    </View>
  );
};
