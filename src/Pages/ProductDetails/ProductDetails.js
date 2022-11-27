import React from 'react';
import ProductDetailsCard from './ProductDetailsCard';

const ProductDetails = () => {
    return (
        <div>
            <p>this product de</p>
            <div className='mt-10 mx-10 grid gap-6 grid-cols-1 lg:grid-cols-2 justify-center' >
                <ProductDetailsCard></ProductDetailsCard>
                <ProductDetailsCard></ProductDetailsCard>
            </div>
        </div>
    );
};

export default ProductDetails;