import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  userType: 'girlfriend' | 'friend' | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  userType: null,
  login: (username, password) => {
    if (username === 'pollamma' && password === 'iloveyousri') {
      set({ isAuthenticated: true, userType: 'girlfriend' });
      return true;
    } else if (username === 'iamjaysfriend' && password === 'happybirthdayjay') {
      set({ isAuthenticated: true, userType: 'friend' });
      return true;
    }
    return false;
  },
  logout: () => set({ isAuthenticated: false, userType: null }),
}));