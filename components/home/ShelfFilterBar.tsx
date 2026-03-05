import React from 'react';
import { ScrollView } from 'react-native';
import { XStack, Text, View } from 'tamagui';
import { colors } from '../../constants/theme';
import type { Shelf } from '../../types';

interface ShelfFilterBarProps {
  shelves: Shelf[];
  selectedShelfId: string | null; // null = すべて
  onSelect: (shelfId: string | null) => void;
}

interface ChipProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

function FilterChip({ label, isActive, onPress }: ChipProps) {
  return (
    <View
      backgroundColor={isActive ? colors.ink : colors.paper}
      borderWidth={1}
      borderColor={isActive ? colors.ink : colors.border}
      borderRadius={20}
      paddingHorizontal="$3"
      paddingVertical="$2"
      onPress={onPress}
      pressStyle={{ opacity: 0.75 }}
      cursor="pointer"
    >
      <Text
        fontSize={12}
        color={isActive ? colors.cream : colors.inkLight}
        fontWeight={isActive ? '500' : '400'}
      >
        {label}
      </Text>
    </View>
  );
}

export function ShelfFilterBar({
  shelves,
  selectedShelfId,
  onSelect,
}: ShelfFilterBarProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingBottom: 16,
        gap: 8,
        flexDirection: 'row',
      }}
    >
      <FilterChip
        label="すべて"
        isActive={selectedShelfId === null}
        onPress={() => onSelect(null)}
      />
      {shelves.map((shelf) => (
        <FilterChip
          key={shelf.id}
          label={shelf.name}
          isActive={selectedShelfId === shelf.id}
          onPress={() => onSelect(shelf.id)}
        />
      ))}
    </ScrollView>
  );
}
