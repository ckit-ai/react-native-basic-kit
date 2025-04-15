import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextType = {
  isAuthenticated: boolean;
  login: (userData?: any) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
};

const AUTH_STORAGE_KEY = '@auth_data';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on app load
  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const authData = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
        if (authData) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Failed to load auth state', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAuthState();
  }, []);

  const login = async (userData?: any) => {
    try {
      // Store any user data if provided
      await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData || { authenticated: true }));
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Failed to store auth data', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Failed to remove auth data', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 