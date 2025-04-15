import React from 'react';
import { View } from 'react-native';
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

  const handleLogout = () => {
    logout();
    router.replace('/(auth)/login');
  };

  return (
    <Center style={{ flex: 1, padding: 16 }}>
      <Box style={{ width: '100%', maxWidth: 384 }}>
        <VStack style={{ alignItems: 'center', gap: 16 }}>
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
          >
            <ButtonText>Logout</ButtonText>
          </Button>
        </VStack>
      </Box>
    </Center>
  );
} 