import React from 'react';
import { router } from 'expo-router';
import {
  Box,
  Button,
  ButtonText,
  Center,
  Heading,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { useAuthStore } from '../services/auth.service';

export default function HelloWorld() {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <Center style={{ flex: 1, padding: 16 }}>
      <Box style={{ width: '100%', maxWidth: 384 }}>
        <VStack style={{ alignItems: 'center', gap: 16 }}>
          <Heading style={{ textAlign: 'center' }}>
            Hello World!
          </Heading>
          
          <Text style={{ textAlign: 'center', fontSize: 18 }}>
            Welcome, {user?.name}! You are successfully logged in.
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