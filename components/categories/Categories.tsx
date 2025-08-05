import React from "react";
import { Text, View } from "react-native";

type Props = {
  categories?: string[];
};

export const CategoriesTags = ({ categories = [] }: Props) => {
  return (
    <View className="flex-row flex-wrap gap-2 mt-4">
      {categories.map((category, index) => (
        <View key={index} className="bg-foreground-10 px-3 py-1 rounded-full">
          <Text className="text-xs text-white font-bold">{category}</Text>
        </View>
      ))}
    </View>
  );
};
