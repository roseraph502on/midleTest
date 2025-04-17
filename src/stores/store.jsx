import { create } from "zustand";
const store = create((set)=>({
    authenticate: false,
  
    login: (userData) => set({ authenticate: true }),
}));
export default store
