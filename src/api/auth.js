import { create } from 'zustand';

export const useGlobalState = create((set) => ({
  token: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  user: null,
  setUser: (user) => set({ user }),
}));

export default useGlobalState;