import React, { useEffect, useState } from 'react';
import ProductBookingModal from '../../ProductDetails/ProductBookingModal';
import AdvertiseProductCard from './AdvertiseProductCard';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AdvertiseProducts = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/products/advertised`)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    // console.log(products)
    return (
        <div className='mx-2'>
            {
                products.length > 0 && <div className='mb-5 p-10 bg-base-100'>

                    <div className='text-center mt-10 mb-5'>
                        <p className='font-semibold badge badge-lg rounded-lg'>ADVERTISEMENT</p>
                    </div>
                    <div>

                        <Carousel responsive={responsive}>
                            {
                                products.map((product, i) => <AdvertiseProductCard
                                    key={i}
                                    product={product}
                                    setProduct={setProduct}
                                ></AdvertiseProductCard>)
                            }
                        </Carousel>
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