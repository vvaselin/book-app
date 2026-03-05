import React from 'react';
import { FlatList } from 'react-native';
import { View } from 'tamagui';
import { BookGridItem } from './BookGridItem';
import type { UserBook } from '../../types';

interface BookGridProps {
  userBooks: UserBook[];
  onPressBook: (userBook: UserBook) => void;
}

export function BookGrid({ userBooks, onPressBook }: BookGridProps) {
  return (
    <FlatList
      data={userBooks}
      keyExtractor={(item) => item.id}
      numColumns={3}
      scrollEnabled={false} // 親のScrollViewでスクロール
      columnWrapperStyle={{ gap: 14, marginBottom: 14 }}
      contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
      renderItem={({ item }) => (
        <BookGridItem userBook={item} onPress={onPressBook} />
      )}
    />
  );
}
