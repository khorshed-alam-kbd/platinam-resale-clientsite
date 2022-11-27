import React, { useEffect, useState } from 'react';
import AdvertiseProductCard from './AdvertiseProductCard';

const AdvertiseProducts = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/categories`)
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])
    return (
        <div className='mb-5 p-10 bg-base-150'>
            <div className='text-center mt-10 mb-5'>
                <p className='font-semibold'>ADVERTISEMENT</p>
            </div>
            <div className='mx-5 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
                {
                    categories.map(category => <AdvertiseProductCard
                        key={category._id}
                        category={category}
                    ></AdvertiseProductCard>)
                }
                {/* 
                <AdvertiseProductCard></AdvertiseProductCard>
                <AdvertiseProductCard></AdvertiseProductCard>
                <AdvertiseProductCard></AdvertiseProductCard>
                <AdvertiseProductCard></AdvertiseProductCard>
                <AdvertiseProductCard></AdvertiseProductCard>
                <AdvertiseProductCard></AdvertiseProductCard> */}

            </div>
        </div >
    );
};

export default AdvertiseProducts;