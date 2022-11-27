import React from 'react';
import AdvertiseProducts from '../Advertisement/AdvertiseProducts';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeWhyUs from '../HomeWhyUs/HomeWhyUs';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className='text-center mt-10 mb-2'>
                <p className='font-semibold'>ADVERTISEMENT</p>
            </div>
            <AdvertiseProducts></AdvertiseProducts>
            <ProductCategories></ProductCategories>
            <HomeWhyUs></HomeWhyUs>
        </div>
    );
};

export default Home;