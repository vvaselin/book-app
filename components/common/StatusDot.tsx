import React from 'react';
import { View } from 'tamagui';
import { STATUS_COLORS } from '../../constants/theme';
import type { ReadingStatus } from '../../types';

interface StatusDotProps {
  status: ReadingStatus;
  size?: number;
}

export function StatusDot({ status, size = 8 }: StatusDotProps) {
  return (
    <View
      width={size}
      height={size}
      borderRadius={size / 2}
      backgroundColor={STATUS_COLORS[status]}
      borderWidth={1.5}
      borderColor="$cream"
    />
  );
}
