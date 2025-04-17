import { create } from "zustand";
const store = create((set)=>({
    user: null, // 로그인한 사용자 정보 (없으면 null)
    isLoggedIn: false, // 로그인 상태
  
    // 로그인 함수 (예: 서버 응답 후 user 정보 저장)
    login: (userData) => set({ user: userData, isLoggedIn: true }),
  
    // 로그아웃 함수
    logout: () => set({ user: null, isLoggedIn: false }),
}));
export default store
