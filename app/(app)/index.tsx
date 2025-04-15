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

export default function HomeScreen() {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <Center flex={1} p="$4">
      <Box w="$full" maxW="$96">
        <VStack space="xl" alignItems="center">
          <Heading size="2xl" textAlign="center">
            Welcome, {user?.name}!
          </Heading>
          
          <Text textAlign="center" fontSize="$lg">
            You have successfully logged in to the application.
          </Text>

          <Button
            onPress={handleLogout}
            size="lg"
            variant="outline"
            mt="$4"
          >
            <ButtonText>Logout</ButtonText>
          </Button>
        </VStack>
      </Box>
    </Center>
  );
} 