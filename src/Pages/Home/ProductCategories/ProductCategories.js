import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const ProductCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/categories`)
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])
    console.log(categories)
    return (
        <div className='mx-5'>
            <div className='text-center mt-10 mb-5'>
                <p className='font-semibold'>CATAGORIES</p>
            </div>
            <div className='mx-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;