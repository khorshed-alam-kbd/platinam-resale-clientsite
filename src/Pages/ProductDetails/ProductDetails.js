import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ProductDetailsCard from './ProductDetailsCard';
import ProductBookingModal from './ProductBookingModal';

const ProductDetails = () => {
    const category = useLoaderData()
    const [product, setProduct] = useState(null);

    const categoryName = category.categoryName
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/products?category=${categoryName}`)
            .then(res => res.json())
    });
    if (isLoading) return <button className="btn-ghost loading">Please wait, Data is loading !</button>
    // console.log(products)
    return (
        <div>
            <div className='my-10 mx-10 grid gap-6 grid-cols-1 lg:grid-cols-2 justify-center' >
                {
                    products.map((product, i) => <ProductDetailsCard
                        key={i}
                        product={product}
                        setProduct={setProduct}
                    ></ProductDetailsCard>)
                }
            </div>
            {
                product &&
                <ProductBookingModal
                    product={product}
                    refetch={refetch}
                ></ProductBookingModal>
            }
        </div>
    );
};

export default ProductDetails;