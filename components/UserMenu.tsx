import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { useRouter } from 'expo-router';
import { Avatar, AvatarFallbackText, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from '../app/context/AuthContext';

export const UserMenu = () => {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.replace('/(auth)/login');
  };

  const handleProfile = () => {
    router.push('/profile');
  };

  return (
    <View style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000 }}>
      <Menu
        placement="bottom right"
        trigger={({ ...triggerProps }) => (
          <TouchableOpacity {...triggerProps}>
            <Avatar size="md">
              <AvatarFallbackText>JD</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
                }}
              />
            </Avatar>
          </TouchableOpacity>
        )}
      >
        <MenuItem onPress={handleProfile}>
          <MenuItemLabel>Profile</MenuItemLabel>
        </MenuItem>
        <MenuItem onPress={handleLogout}>
          <MenuItemLabel>Logout</MenuItemLabel>
        </MenuItem>
      </Menu>
    </View>
  );
}; 