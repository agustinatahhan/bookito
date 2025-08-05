import { useBooks } from '@/hooks/useBook';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const Home = () => {

  const {data, isLoading, isError} = useBooks();
  
  return (
     <View className="flex-1 justify-center items-center bg-background-base">
      <Text className="font-bold text-3xl text-foreground-base">Bookito</Text>
      <FlatList 
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={
        ({item}) => (
          <Text>
            {item.title}
          </Text>
        )
      }
      />
    </View>
  )
}

export default Home