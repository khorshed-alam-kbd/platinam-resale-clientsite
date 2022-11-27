import React from 'react';
import AdvertiseProductCard from './AdvertiseProductCard';

const AdvertiseProducts = () => {
    return (
        <div className='mb-5 p-10 bg-base-150'>
            <div className='mx-5 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>

                <AdvertiseProductCard></AdvertiseProductCard>
                <AdvertiseProductCard></AdvertiseProductCard>
                <AdvertiseProductCard></AdvertiseProductCard>
                <AdvertiseProductCard></AdvertiseProductCard>
                <AdvertiseProductCard></AdvertiseProductCard>
                <AdvertiseProductCard></AdvertiseProductCard>
                {
                    // services.map(services => <ServicesCard
                    //     key={services.services_id}
                    //     services={services}
                    // ></ServicesCard>)

                }
            </div>
        </div>
    );
};

export default AdvertiseProducts;