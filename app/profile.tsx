import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, AvatarFallbackText, AvatarImage, VStack, Heading } from '@gluestack-ui/themed';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <VStack space="md" alignItems="center" mt={10}>
        <Avatar size="2xl">
          <AvatarFallbackText>JD</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
            }}
          />
        </Avatar>
        <Heading size="xl">John Doe</Heading>
        <Text>john.doe@example.com</Text>
      </VStack>
    </View>
  );
} 