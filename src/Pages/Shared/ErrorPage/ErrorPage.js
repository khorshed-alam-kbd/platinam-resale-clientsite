import React from 'react';
import { Link } from 'react-router-dom';
import ErrImg from '../../../Assets/404-Page-Img.png';

const ErrorPage = () => {
    return (
        <>
            <div className="hero w-full min-h-screen" style={{ backgroundImage: `url(${ErrImg})` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-full">
                        <h1 className="mb-5 mt-5 text-5xl font-bold">' Page Not Found '</h1>
                        <p className="mb-5">Oppss... Something wrong, Back to Home page.</p>
                        <Link to='/'><button className="btn btn-outline mb-10 text-white">BACK TO HOME</button></Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ErrorPage;