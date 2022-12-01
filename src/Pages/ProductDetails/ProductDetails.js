import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ProductDetailsCard from './ProductDetailsCard';

const ProductDetails = () => {
    const category = useLoaderData()

    const categoryName = category.categoryName
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/products?category=${categoryName}`)
            .then(res => res.json())
    });
    console.log(products)
    return (
        <div>
            <div className='mt-10 mx-10 grid gap-6 grid-cols-1 lg:grid-cols-2 justify-center' >
                {
                    products.map((product, i) => <ProductDetailsCard
                        key={i}
                        product={product}
                    ></ProductDetailsCard>)
                }
            </div>
        </div>
    );
};

export default ProductDetails;