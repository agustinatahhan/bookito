import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, View } from 'react-native';

type Props = {
    query: string;
    onChange: (text: string) => void
}
export const SearchBar = ({query, onChange}: Props) => {
  return (
    <View className="flex-row items-center bg-white rounded-xl px-4 py-2 mb-4 border border-foreground-10 mx-5">
      <Ionicons name="search-outline" size={20} color="#a395c9" />
      <TextInput
        placeholder="Search books..."
        placeholderTextColor="#a395c9"
        value={query}
        onChangeText={onChange}
        className="flex-1 ml-2 text-background-50 text-base"
      />
    </View>
  )
}

