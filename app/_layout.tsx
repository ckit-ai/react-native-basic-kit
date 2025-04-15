import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from 'expo-font';
import { Slot } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {SafeAreaView} from "react-native";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GluestackUIProvider mode="light">
        <SafeAreaView style={{ flex: 1 }}>
            <Slot />
        </SafeAreaView>
     </GluestackUIProvider>
  );
}
