import React, { useState } from 'react';
import { Image, View as RNView } from 'react-native';
import { Text } from 'tamagui';
import { COVER_GRADIENTS } from '../../constants/theme';

interface BookCoverProps {
  coverUrl?: string;
  title: string;
  width: number;
  height: number;
  borderRadius?: number;
}

// グラデーションの代わりにソリッドカラーのペアを使う
const FALLBACK_COLORS = [
  '#2C3E50',
  '#7B4F2C',
  '#1A3A2A',
  '#3B1F4A',
  '#4A1A1A',
  '#1A2A4A',
];

/**
 * 書影表示コンポーネント
 * 優先順位: cover_url → ソリッドカラー + 頭文字フォールバック
 */
export function BookCover({
  coverUrl,
  title,
  width,
  height,
  borderRadius = 8,
}: BookCoverProps) {
  const [hasError, setHasError] = useState(false);

  const colorIndex = title.charCodeAt(0) % FALLBACK_COLORS.length;
  const bgColor = FALLBACK_COLORS[colorIndex];

  const containerStyle = {
    width,
    height,
    borderRadius,
    overflow: 'hidden' as const,
  };

  if (coverUrl && !hasError) {
    return (
      <RNView style={containerStyle}>
        <Image
          source={{ uri: coverUrl }}
          style={{ width, height }}
          resizeMode="cover"
          onError={() => setHasError(true)}
        />
      </RNView>
    );
  }

  // フォールバック: ソリッドカラー背景 + 頭文字
  return (
    <RNView
      style={{
        ...containerStyle,
        backgroundColor: bgColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        color="rgba(255,255,255,0.9)"
        fontSize={width * 0.3}
        fontWeight="700"
      >
        {title.charAt(0)}
      </Text>
    </RNView>
  );
}