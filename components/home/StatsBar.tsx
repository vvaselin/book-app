import React from 'react';
import { XStack, YStack, Text, Separator } from 'tamagui';
import { colors } from '../../constants/theme';
import type { ReadingStats } from '../../types';

interface StatsBarProps {
  stats: ReadingStats;
}

interface StatItemProps {
  value: number;
  label: string;
  showSeparator?: boolean;
}

function StatItem({ value, label, showSeparator = true }: StatItemProps) {
  return (
    <XStack flex={1}>
      <YStack
        flex={1}
        alignItems="center"
        justifyContent="center"
        paddingVertical="$3"
        pressStyle={{ backgroundColor: colors.amberPale }}
        cursor="pointer"
      >
        <Text
          fontFamily="$heading"
          fontSize={22}
          color={colors.ink}
          lineHeight={22}
        >
          {value}
        </Text>
        <Text
          fontSize={10}
          color={colors.inkMuted}
          marginTop="$1"
          letterSpacing={0.5}
        >
          {label}
        </Text>
      </YStack>
      {showSeparator && (
        <Separator vertical borderColor={colors.border} />
      )}
    </XStack>
  );
}

export function StatsBar({ stats }: StatsBarProps) {
  return (
    <XStack
      backgroundColor={colors.paper}
      borderBottomWidth={1}
      borderBottomColor={colors.border}
    >
      <StatItem value={stats.reading} label="読んでる" />
      <StatItem value={stats.completed} label="読了" />
      <StatItem value={stats.unread} label="積読" />
      <StatItem value={stats.completed_this_year} label="今年" showSeparator={false} />
    </XStack>
  );
}
