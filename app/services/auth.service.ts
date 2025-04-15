import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthResponse {
  success: boolean;
  error?: string;
  data?: {
    user: User;
    token: string;
  };
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<AuthResponse>;
  signup: (email: string, password: string, name: string) => Promise<AuthResponse>;
  logout: () => void;
}

// TODO: Replace this mock API with real API calls to your backend
// This is just a placeholder that accepts any credentials for demo purposes
const mockApi = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For demo purposes, accept any email/password combination
    // In a real app, this would be replaced with an actual API call
    return {
      success: true,
      data: {
        user: {
          id: '1',
          email,
          name: email.split('@')[0], // Use part of email as name for demo
        },
        token: 'mock-jwt-token-' + Math.random().toString(36).substr(2, 9),
      },
    };
  },

  signup: async (email: string, password: string, name: string): Promise<AuthResponse> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For demo purposes, always succeed
    // In a real app, this would be replaced with an actual API call
    return {
      success: true,
      data: {
        user: {
          id: Math.random().toString(36).substr(2, 9),
          email,
          name,
        },
        token: 'mock-jwt-token-' + Math.random().toString(36).substr(2, 9),
      },
    };
  },
};

// TODO: Consider adding token persistence using AsyncStorage or SecureStore
// to keep the user logged in between app restarts
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    try {
      // TODO: Replace with your actual API endpoint
      const response = await mockApi.login(email, password);
      
      if (response.success && response.data) {
        // TODO: Consider storing the token securely using SecureStore
        set({ 
          user: response.data.user, 
          token: response.data.token,
          isAuthenticated: true 
        });
        return { success: true };
      } else {
        return { success: false, error: response.error || 'Login failed' };
      }
    } catch (error) {
      return { success: false, error: 'An error occurred during login' };
    }
  },

  signup: async (email: string, password: string, name: string) => {
    try {
      // TODO: Replace with your actual API endpoint
      const response = await mockApi.signup(email, password, name);
      
      if (response.success && response.data) {
        // TODO: Consider storing the token securely using SecureStore
        set({ 
          user: response.data.user, 
          token: response.data.token,
          isAuthenticated: true 
        });
        return { success: true };
      } else {
        return { success: false, error: response.error || 'Signup failed' };
      }
    } catch (error) {
      return { success: false, error: 'An error occurred during signup' };
    }
  },

  logout: () => {
    // TODO: Consider clearing any stored tokens from SecureStore here
    set({ user: null, token: null, isAuthenticated: false });
  },
})); 