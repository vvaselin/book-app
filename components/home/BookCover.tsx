import React, { useState } from 'react';
import { Image } from 'react-native';
import { View, Text } from 'tamagui';
import { LinearGradient } from 'expo-linear-gradient';
import { COVER_GRADIENTS } from '../../constants/theme';

interface BookCoverProps {
  coverUrl?: string;
  title: string;
  width: number;
  height: number;
  borderRadius?: number;
}

/**
 * 書影表示コンポーネント
 * 優先順位: 手入力画像 / Google Books URL → フォールバックグラデーション
 */
export function BookCover({
  coverUrl,
  title,
  width,
  height,
  borderRadius = 8,
}: BookCoverProps) {
  const [hasError, setHasError] = useState(false);

  // タイトルの文字コードをもとに安定したグラデーションを選ぶ
  const gradientIndex =
    title.charCodeAt(0) % COVER_GRADIENTS.length;
  const [colorStart, colorEnd] = COVER_GRADIENTS[gradientIndex];

  const containerStyle = {
    width,
    height,
    borderRadius,
    overflow: 'hidden' as const,
  };

  if (coverUrl && !hasError) {
    return (
      <View style={containerStyle}>
        <Image
          source={{ uri: coverUrl }}
          style={{ width, height }}
          resizeMode="cover"
          onError={() => setHasError(true)}
        />
      </View>
    );
  }

  // フォールバック: グラデーション + 頭文字
  return (
    <View style={containerStyle}>
      <LinearGradient
        colors={[colorStart, colorEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ width, height, alignItems: 'center', justifyContent: 'center' }}
      >
        <Text
          color="rgba(255,255,255,0.9)"
          fontSize={width * 0.28}
          fontWeight="700"
          fontFamily="$heading"
        >
          {title.charAt(0)}
        </Text>
      </LinearGradient>
    </View>
  );
}
