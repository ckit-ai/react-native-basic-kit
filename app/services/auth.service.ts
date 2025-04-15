import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

// Mock user database
const mockUsers: { [key: string]: { password: string; user: User } } = {};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const userData = mockUsers[email];
    
    if (!userData || userData.password !== password) {
      return { success: false, error: 'Invalid email or password' };
    }

    set({ user: userData.user, isAuthenticated: true });
    return { success: true };
  },

  signup: async (email: string, password: string, name: string) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (mockUsers[email]) {
      return { success: false, error: 'User already exists' };
    }

    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
    };

    mockUsers[email] = {
      password,
      user: newUser,
    };

    set({ user: newUser, isAuthenticated: true });
    return { success: true };
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
})); 