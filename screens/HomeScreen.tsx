import React, { useMemo, useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { YStack, XStack, Text, View } from 'tamagui';
import { colors } from '../constants/theme';
import { mockUserBooks, mockShelves, mockStats } from '../constants/mockData';
import { StatsBar } from '../components/home/StatsBar';
import { CurrentlyReadingCard } from '../components/home/CurrentlyReadingCard';
import { ShelfFilterBar } from '../components/home/ShelfFilterBar';
import { BookGrid } from '../components/home/BookGrid';
import type { UserBook } from '../types';

type HomeScreenProps = {
  onPressBook: (userBook: UserBook) => void;
  onPressAdd: () => void;
  onPressScan: () => void;
};

export function HomeScreen({ onPressBook, onPressAdd, onPressScan }: HomeScreenProps) {
  const [selectedShelfId, setSelectedShelfId] = useState<string | null>(null);

  const currentlyReading = useMemo(
    () => mockUserBooks.filter((ub) => ub.status === 'reading'),
    []
  );

  const filteredBooks = useMemo(() => {
    if (selectedShelfId === null) return mockUserBooks;
    return mockUserBooks.filter((ub) =>
      ub.shelves?.some((s) => s.id === selectedShelfId)
    );
  }, [selectedShelfId]);

  const handlePressBook = (userBook: UserBook) => onPressBook(userBook);
  const handleAddBook = () => onPressAdd();
  const handleScan = () => onPressScan();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.ink }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.ink} />

      {/* ── Header ── */}
      <XStack
        backgroundColor={colors.ink}
        paddingHorizontal="$5"
        paddingTop="$4"
        paddingBottom="$4"
        alignItems="center"
        justifyContent="space-between"
      >
        <YStack>
          <Text
            fontFamily="$heading"
            fontSize={30}
            color={colors.cream}
            letterSpacing={0.5}
          >
            栞
          </Text>
          <Text
            fontSize={10}
            color={colors.inkMuted}
            letterSpacing={1.2}
            textTransform="uppercase"
          >
            My Reading Life
          </Text>
        </YStack>

        {/* Scan button */}
        <View
          width={38}
          height={38}
          backgroundColor={colors.amber}
          borderRadius={11}
          alignItems="center"
          justifyContent="center"
          onPress={handleScan}
          pressStyle={{ opacity: 0.8, scale: 0.95 }}
          cursor="pointer"
        >
          <Text fontSize={18}>📷</Text>
        </View>
      </XStack>

      {/* ── Stats bar ── */}
      <StatsBar stats={mockStats} />

      {/* ── Scrollable body ── */}
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.cream }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Currently reading section */}
        {currentlyReading.length > 0 && (
          <YStack paddingHorizontal="$5" paddingTop="$5">
            <SectionHeader title="📖 読んでる本" />
            {currentlyReading.map((ub) => (
              <CurrentlyReadingCard
                key={ub.id}
                userBook={ub}
                onPress={handlePressBook}
              />
            ))}
          </YStack>
        )}

        {/* Shelf filter */}
        <YStack paddingTop="$4">
          <XStack
            paddingHorizontal="$5"
            marginBottom="$3"
            alignItems="center"
            justifyContent="space-between"
          >
            <SectionHeader title="📚 本棚" />
            <Text
              fontSize={12}
              color={colors.amber}
              onPress={() => {}}
              cursor="pointer"
            >
              すべて見る
            </Text>
          </XStack>

          <ShelfFilterBar
            shelves={mockShelves}
            selectedShelfId={selectedShelfId}
            onSelect={setSelectedShelfId}
          />
        </YStack>

        {/* Book grid */}
        <BookGrid userBooks={filteredBooks} onPressBook={handlePressBook} />
      </ScrollView>

      {/* ── Bottom Tab Bar (Tab Navigator で置き換え可) ── */}
      <BottomNav
        onAddPress={handleAddBook}
        onScanPress={handleScan}
      />
    </SafeAreaView>
  );
}

// ── Sub-components ──────────────────────────────────────────

function SectionHeader({ title }: { title: string }) {
  return (
    <Text
      fontFamily="$heading"
      fontSize={15}
      fontWeight="600"
      color={colors.ink}
      letterSpacing={0.3}
      marginBottom="$3"
    >
      {title}
    </Text>
  );
}

function BottomNav({
  onAddPress,
  onScanPress,
}: {
  onAddPress: () => void;
  onScanPress: () => void;
}) {
  return (
    <XStack
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      height={82}
      backgroundColor={colors.paper}
      borderTopWidth={1}
      borderTopColor={colors.border}
      alignItems="center"
      justifyContent="space-around"
      paddingBottom="$4"
    >
      <NavItem icon="📚" label="本棚" isActive onPress={() => {}} />
      <NavItem icon="📷" label="スキャン" onPress={onScanPress} />

      {/* Center FAB */}
      <View
        width={52}
        height={52}
        backgroundColor={colors.ink}
        borderRadius={16}
        alignItems="center"
        justifyContent="center"
        marginTop={-16}
        shadowColor="#000"
        shadowOffset={{ width: 0, height: 4 }}
        shadowOpacity={0.25}
        shadowRadius={8}
        onPress={onAddPress}
        pressStyle={{ scale: 0.94 }}
        cursor="pointer"
      >
        <Text fontSize={26} color={colors.cream} lineHeight={28}>＋</Text>
      </View>

      <NavItem icon="🔖" label="メモ" onPress={() => {}} />
      <NavItem icon="👤" label="設定" onPress={() => {}} />
    </XStack>
  );
}

function NavItem({
  icon,
  label,
  isActive,
  onPress,
}: {
  icon: string;
  label: string;
  isActive?: boolean;
  onPress: () => void;
}) {
  return (
    <YStack
      flex={1}
      alignItems="center"
      gap={4}
      paddingVertical="$2"
      onPress={onPress}
      cursor="pointer"
      pressStyle={{ opacity: 0.7 }}
    >
      <Text fontSize={22} lineHeight={24}>{icon}</Text>
      <Text
        fontSize={10}
        letterSpacing={0.5}
        color={isActive ? colors.amber : colors.inkMuted}
      >
        {label}
      </Text>
    </YStack>
  );
}
