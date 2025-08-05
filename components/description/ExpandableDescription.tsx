import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  description: string;
};

export const ExpandableDescription = ({ description }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const numberOfLines = expanded ? undefined : 6;

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <View>
      <Text
        numberOfLines={numberOfLines}
        className="text-base text-foreground-60"
      >
        {description}
      </Text>

      <Pressable onPress={toggleExpanded}>
        <Text className="text-foreground-40 font-medium mt-1">
          {expanded ? "Read less" : "Read more"}
        </Text>
      </Pressable>
    </View>
  );
};
