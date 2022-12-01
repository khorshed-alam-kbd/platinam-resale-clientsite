import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../Assets/bannerImg.webp'

const HomeBanner = () => {
    return (
        <div className="hero w-full" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-full">
                    <h1 className="mb-5 mt-10 text-5xl font-bold">' DO YOU WANT TO BUY OR SELL LAPTOP ? '</h1>
                    <p className="mb-5">We are ready to help buy and sell laptops. Our platform are safe, smart, and convenient for our customers.</p>
                    <Link to='/login'><button className="btn btn-outline mb-10 rounded">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;