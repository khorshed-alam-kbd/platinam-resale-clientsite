import React from 'react';
import AdvertiseProducts from '../Advertisement/AdvertiseProducts';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeWhyUs from '../HomeWhyUs/HomeWhyUs';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <ProductCategories></ProductCategories>
            <AdvertiseProducts></AdvertiseProducts>
            <HomeWhyUs></HomeWhyUs>
        </div>
    );
};

export default Home;