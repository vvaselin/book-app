import React from 'react';
import { XStack, YStack, Text, View } from 'tamagui';
import { colors } from '../../constants/theme';
import { BookCover } from '../common/BookCover';
import { useReadingProgress } from '../../hooks/useReadingProgress';
import type { UserBook } from '../../types';

interface CurrentlyReadingCardProps {
  userBook: UserBook;
  onPress: (userBook: UserBook) => void;
}

export function CurrentlyReadingCard({
  userBook,
  onPress,
}: CurrentlyReadingCardProps) {
  const { progressPercent, currentPage, totalPages } =
    useReadingProgress(userBook);

  return (
    <View
      backgroundColor={colors.ink}
      borderRadius={16}
      padding="$4"
      marginBottom="$3"
      pressStyle={{ scale: 0.98, opacity: 0.9 }}
      onPress={() => onPress(userBook)}
      cursor="pointer"
      // アンバーのアクセントライン
      overflow="hidden"
    >
      {/* Top accent line */}
      <View
        position="absolute"
        top={0}
        left={0}
        right={0}
        height={3}
        backgroundColor={colors.amber}
      />

      <XStack gap="$3" alignItems="flex-start" marginTop="$1">
        {/* Book cover */}
        <View
          shadowColor="#000"
          shadowOffset={{ width: 4, height: 4 }}
          shadowOpacity={0.4}
          shadowRadius={8}
        >
          <BookCover
            coverUrl={userBook.book.cover_url}
            title={userBook.book.title}
            width={64}
            height={88}
            borderRadius={6}
          />
        </View>

        {/* Book info */}
        <YStack flex={1} gap="$1">
          <Text
            fontSize={10}
            color={colors.amber}
            letterSpacing={1}
            textTransform="uppercase"
          >
            Now Reading
          </Text>

          <Text
            fontFamily="$heading"
            fontSize={15}
            color={colors.cream}
            fontWeight="600"
            numberOfLines={2}
            lineHeight={21}
          >
            {userBook.book.title}
          </Text>

          <Text fontSize={11} color={colors.inkMuted} numberOfLines={1}>
            {userBook.book.author}
          </Text>

          {/* Progress bar */}
          <YStack marginTop="$2" gap="$1">
            <View
              height={4}
              backgroundColor="rgba(255,255,255,0.1)"
              borderRadius={2}
              overflow="hidden"
            >
              <View
                height={4}
                width={`${progressPercent}%`}
                backgroundColor={colors.amber}
                borderRadius={2}
              />
            </View>

            <Text fontSize={11} color={colors.inkMuted}>
              {totalPages > 0
                ? `${currentPage} / ${totalPages}ページ（${progressPercent}%）`
                : `${progressPercent}%`}
            </Text>
          </YStack>
        </YStack>
      </XStack>
    </View>
  );
}
