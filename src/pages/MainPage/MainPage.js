import React from 'react';
import './mainpage.css'
import NavBar from "../../common/NavBar/NavBar";
import dayMeal from '../../assets/daymeal.JPG'

const MainPage = () => {
    return (
        <div className='main-page-container'>
            <NavBar />
            <div className='main-meal-card'>
                <img className='day-meal-img' src={dayMeal} alt=""/>
                <div className='day-meal-description-container'>
                    <h2>MEAL OF THE DAY!</h2>
                    <span className='day-meal-description'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, culpa delectus eius eos eum eveniet, facere facilis labore quis reiciendis soluta ullam? Aut facilis fugit odio voluptas. Atque aut delectus dignissimos eveniet explicabo laboriosam mollitia nam nisi placeat porro quidem quisquam, sed similique sit suscipit temporibus ut vel veniam! Quia!
                    </span>
                </div>
            </div>
            <button className='btn-1 try-btn'>TRY NOW</button>
        </div>
    );
};

export default MainPage;