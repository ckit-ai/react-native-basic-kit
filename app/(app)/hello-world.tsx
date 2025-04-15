import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { router } from 'expo-router';
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useAuth } from '../context/AuthContext';

export default function HelloWorld() {
  const { logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <Center style={{ flex: 1, padding: 16 }}>
      <Box style={{ width: '100%', maxWidth: 384 }}>
        <VStack style={{ alignItems: 'center', gap: 16 }}>
          <Image 
            source={require('@/assets/logo-t.webp')} 
            style={{ width: 120, height: 120, marginBottom: 16 }} 
            resizeMode="contain"
          />
          
          <Heading style={{ textAlign: 'center' }}>
            Hello World!
          </Heading>
          
          <Text style={{ textAlign: 'center', fontSize: 18 }}>
            Welcome! You are successfully logged in.
          </Text>

          <Button
            onPress={handleLogout}
            variant="outline"
            style={{ marginTop: 16 }}
            isDisabled={isLoggingOut}
          >
            <ButtonText>{isLoggingOut ? 'Logging out...' : 'Logout'}</ButtonText>
          </Button>
        </VStack>
      </Box>
    </Center>
  );
} 