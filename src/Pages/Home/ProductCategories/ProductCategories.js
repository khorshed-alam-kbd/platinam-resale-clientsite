import React from 'react';
import CategoryCard from './CategoryCard';

const ProductCategories = () => {
    return (
        <div className='mx-5'>
            <div className='text-center mt-10 mb-5'>
                <p className='font-semibold'>CATAGORIES</p>
            </div>
            <div className='mx-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <CategoryCard></CategoryCard>
                <CategoryCard></CategoryCard>
                <CategoryCard></CategoryCard>
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

export default ProductCategories;