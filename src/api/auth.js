import { create } from 'zustand';

const useGlobalState = create((set) => ({
  token: null,
  setToken: (token) => set({ token }),
}));

export default useGlobalState;