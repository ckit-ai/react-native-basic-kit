import { Redirect } from 'expo-router';
import { useAuthStore } from './services/auth.service';

export default function Index() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return <Redirect href="/(app)/hello-world" />;
}