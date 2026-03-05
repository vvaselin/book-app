import React from 'react';
import { useWindowDimensions } from 'react-native';
import { YStack, Text, View, XStack } from 'tamagui';
import { colors } from '../../constants/theme';
import { BookCover } from '../common/BookCover';
import { StatusDot } from '../common/StatusDot';
import type { UserBook } from '../../types';

interface BookGridItemProps {
  userBook: UserBook;
  onPress: (userBook: UserBook) => void;
}

export function BookGridItem({ userBook, onPress }: BookGridItemProps) {
  const { width } = useWindowDimensions();
  // 3列・左右padding 20px・列間gap 14px
  const itemWidth = (width - 40 - 28) / 3;
  const coverHeight = itemWidth * 1.5; // 2:3 ratio

  const firstShelf = userBook.shelves?.[0];

  return (
    <YStack
      width={itemWidth}
      onPress={() => onPress(userBook)}
      pressStyle={{ scale: 0.96, opacity: 0.9 }}
      cursor="pointer"
    >
      {/* Cover + status dot */}
      <View
        width={itemWidth}
        height={coverHeight}
        borderRadius={8}
        overflow="hidden"
        shadowColor="#000"
        shadowOffset={{ width: 2, height: 4 }}
        shadowOpacity={0.15}
        shadowRadius={6}
        marginBottom="$2"
      >
        <BookCover
          coverUrl={userBook.book.cover_url}
          title={userBook.book.title}
          width={itemWidth}
          height={coverHeight}
          borderRadius={8}
        />

        {/* Status dot - top right */}
        <View position="absolute" top={6} right={6}>
          <StatusDot status={userBook.status} size={8} />
        </View>
      </View>

      {/* Title */}
      <Text
        fontSize={11}
        color={colors.ink}
        fontWeight="500"
        lineHeight={15}
        numberOfLines={2}
      >
        {userBook.book.title}
      </Text>

      {/* Author */}
      <Text
        fontSize={10}
        color={colors.inkMuted}
        marginTop={2}
        numberOfLines={1}
      >
        {userBook.book.author}
      </Text>

      {/* Shelf tag */}
      {firstShelf && (
        <View
          backgroundColor={colors.amberPale}
          borderRadius={4}
          paddingHorizontal="$1"
          paddingVertical={2}
          alignSelf="flex-start"
          marginTop={4}
        >
          <Text fontSize={10} color={colors.amber}>
            {firstShelf.name}
          </Text>
        </View>
      )}
    </YStack>
  );
}
