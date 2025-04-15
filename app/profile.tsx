import React from 'react';
import { View } from 'react-native';
import { Avatar, AvatarFallbackText, AvatarImage } from "@/components/ui/avatar";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <VStack space="md" style={{ alignItems: 'center', marginTop: 40 }}>
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