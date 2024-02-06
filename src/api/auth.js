import create  from 'zustand';

export const useGlobalState = create((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  user: null,
  setUser: (user) => set({ user }),
}));


