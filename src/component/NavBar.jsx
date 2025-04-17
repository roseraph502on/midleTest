import React from 'react'
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
    const navigate = useNavigate();
    const loginClick = () => {
        console.log("loclk")
        navigate(`/login`); 
      };
      const logoClick = () => {
        console.log("loclk")
        navigate(`/`); 
      };

    return (
        <div id='nav'>
            <h2 className='title' onClick={logoClick} >도서관</h2>
            <div className='search'>
                <input className='searchBox' type="text" />
                <button className='searchBtn'></button>
            </div>
            <button onClick={loginClick} >로그인</button>

        </div>
    )
}

export default NavBar
