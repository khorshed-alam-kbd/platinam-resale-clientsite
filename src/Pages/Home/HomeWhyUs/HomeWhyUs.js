import React from 'react';
import whyUsImg from '../../../Assets/buy&sell.jpg'

const HomeWhyUs = () => {
    return (
        <>
            <div className='text-center mt-10 mb-5'>
                <p className='font-semibold badge badge-lg rounded-lg'>ABOUT US</p>
            </div>
            <div className="hero my-5 bg-base-200">
                <div className="hero-content flex-col lg:flex-row my-12">
                    <img src={whyUsImg} alt='' className="w-80 md:w-3/4 lg:w-1/2 rounded-lg" />
                    <div className='lg:ml-10'>
                        <h1 className="text-3xl font-bold">The Largest Marketplace in Bangladesh!</h1>
                        <p className="pt-6">
                            PLATINAM is a platform on which you can buy and sell laptops! We help people buy and sell laptops.  Our solutions are built to be safe, smart, and convenient for our customers.

                            <br /> <span className='font-bold'>Fast & Easy Experience:</span> Navigated buying and selling experience in Bangladesh which is simpler, faster, and easier. Shop and sell on the go and get your desired laptops in just a few clicks.

                            <br /> <span className='font-bold'>Post Ads Free:</span>  As a free classified website, we offer free ad posting features in many categories for the convenience of the users based on their locations.

                            <br /> <span className='font-bold'> Safe & Secure Shopping:</span> We have listed our verified members and authorized dealers to create a safe shopping experience for our users.
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeWhyUs;