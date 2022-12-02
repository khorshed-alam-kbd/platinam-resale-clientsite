import React from 'react';
import img from '../../../Assets/dashboard.png'

const Dashboard = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 text-4xl font-bold">' WELCOME TO PLATINAM'S DASHBOARD '</h1>
                        <h1 className="mb-5 text-3xl font-bold">Control your Activities Easily</h1>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Dashboard;