import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, View } from 'react-native';

type Props = {
    query: string;
    onChange: (text: string) => void
}
export const SearchBar = ({query, onChange}: Props) => {
  return (
    <View className="flex-row items-center bg-foreground-30/90 rounded-xl px-4 py-3 mb-5 mx-5 mt-5">
      <Ionicons name="search-outline" size={30} color="#fff" />
      <TextInput
        placeholder="Search here your next read..."
        placeholderTextColor="#fff"
        
        value={query}
        onChangeText={onChange}
        className="flex-1 ml-2 text-background-50 font-semibold text-lg"
      />
    </View>
  )
}

