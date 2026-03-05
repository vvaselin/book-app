import { useRouter } from 'expo-router';
import { HomeScreen } from '../../screens/HomeScreen';

export default function HomeTab() {
  const router = useRouter();
  return (
    <HomeScreen
      onPressBook={(userBook) => router.push(`/book/${userBook.id}`)}
      onPressAdd={() => router.push('/(tabs)/add')}
      onPressScan={() => router.push('/(tabs)/scan')}
    />
  );
}
