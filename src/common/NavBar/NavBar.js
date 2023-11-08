import React from 'react';
import './navbar.css'
import useScrollPosition from "../../hooks/useScrollPosition";
import mainLogo from '../../assets/newlogo10.png'

const NavBar = () => {

    const scrollPosition = useScrollPosition()

    return (
        <div className={scrollPosition > 0 ? 'navbar-container-scrolled' : 'navbar-container'}>
            <img className='navbar-logo' src={mainLogo} alt="logo"/>
            <div className='navbar-menu-container'>
                <ul className='navbar-menu-list'>
                    <li>HOME</li>
                    <li>MENU</li>
                    <li>BASKET</li>
                </ul>
            </div>
            <div className='navbar-button-container'>
                <button className='btn-1'>Sign Up</button>
            </div>
        </div>
    );
};

export default NavBar;