import { create } from "zustand";
const store = create((set)=>({
    isLoggedIn: false,
  
    login: (userData) => set({ user: userData, isLoggedIn: true }),
}));
export default store
