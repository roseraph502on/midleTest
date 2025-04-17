import { useState ,useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import Store from './stores/store';

import './App.css'

import NavBar from './component/NavBar'
import Books from './page/Books'
import LogIn from './page/LogIn'

function App() {
  const [count, setCount] = useState(0)
  const [authenticate, setAuthenticate] = useState(false);

  const handleLogout = () => {
    setAuthenticate(false);
    localStorage.removeItem('user');
    console.log("사용자 정보 제거");
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setAuthenticate(true);
    }
  }, []);

  return (
    <>
      {/* 상단바 */}
      <NavBar />
      {/* 각페이지 */}
      <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/login" element={<LogIn />} />
      </Routes>

    </>
  )
}

export default App
