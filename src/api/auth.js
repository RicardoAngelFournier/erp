import create  from 'zustand';

const useGlobalState = create((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  user: null,
  setUser: (user) => set({ user }),
}));

export default useGlobalState;