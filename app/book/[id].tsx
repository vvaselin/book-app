import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text } from 'tamagui';
import { colors } from '../../constants/theme';

export default function BookDetailPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  return (
    <View flex={1} backgroundColor={colors.cream} alignItems="center" justifyContent="center">
      <Text color={colors.ink} fontSize={16}>書籍詳細（実装予定）</Text>
      <Text color={colors.inkMuted} fontSize={12} marginTop="$2">id: {id}</Text>
    </View>
  );
}
