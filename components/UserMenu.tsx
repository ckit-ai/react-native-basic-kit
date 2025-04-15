import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
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

  const goToHome = () => {
    router.push('/(app)/hello-world');
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, paddingTop: 10, width: '100%', zIndex: 1000 }}>
      <TouchableOpacity onPress={goToHome}>
        <Image 
          source={require('@/assets/logo-t.webp')} 
          style={{ width: 40, height: 40 }} 
          resizeMode="contain"
        />
      </TouchableOpacity>
      
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