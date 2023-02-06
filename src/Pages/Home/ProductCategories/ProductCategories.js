import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { useQuery } from '@tanstack/react-query';

const ProductCategories = () => {
    // const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/categories`)
    //         .then(res => res.json())
    //         .then(data => setCategories(data));

    // }, [])

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/categories`)
            .then(res => res.json())
    });
    if (isLoading) {
        <div>
            <button className="btn loading">Please wait, Data is loading !</button>
        </div>
    }
    // console.log(categories)
    return (
        <div className='mx-2'>
            <div className='text-center mt-10 mb-5'>
                <p className='font-semibold badge badge-lg rounded-lg'>CATAGORIES</p>
            </div>

            {
                isLoading ?
                    <div className='text-center'>
                        <button className="btn btn-ghost loading">Please wait, Data is loading !</button>
                    </div> :
                    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center '>

                        {
                            categories.map(category => <CategoryCard
                                key={category._id}
                                category={category}
                            ></CategoryCard>)
                        }
                    </div>
            }
        </div>

    );
};

export default ProductCategories;