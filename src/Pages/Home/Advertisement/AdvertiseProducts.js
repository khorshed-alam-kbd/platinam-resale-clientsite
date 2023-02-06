import React, { useEffect, useState } from 'react';
import ProductBookingModal from '../../ProductDetails/ProductBookingModal';
import AdvertiseProductCard from './AdvertiseProductCard';
import { useQuery } from '@tanstack/react-query';

const AdvertiseProducts = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/products/advertised`)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])
    // console.log(products)
    return (
        <div className='mx-2'>
            {
                products.length > 0 && <div className='mb-5 p-10 bg-base-100'>

                    <div className='text-center mt-10 mb-5'>
                        <p className='font-semibold badge badge-lg rounded-lg'>ADVERTISEMENT</p>
                    </div>
                    <div className='grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 place-items-center '>
                        {
                            products.map((product, i) => <AdvertiseProductCard
                                key={i}
                                product={product}
                                setProduct={setProduct}
                            ></AdvertiseProductCard>)
                        }
                    </div>

                </div > || <></>
            }
            {
                product &&
                <ProductBookingModal
                    product={product}
                ></ProductBookingModal>
            }
        </div>

    );
};

export default AdvertiseProducts;