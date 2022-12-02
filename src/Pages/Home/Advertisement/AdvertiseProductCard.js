import React from 'react';

const AdvertiseProductCard = ({ product, setProduct }) => {
    const { productName, productImage, resalePrice } = product;

    console.log(product);
    return (
        <div className="card card-compact bg-base-100 shadow-xl w-3/4">
            <figure className='h-24 md:h-32 lg:h-32 '>
                <img src={productImage} alt="laptop category" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p className='font-semibold'>Price: <small>{resalePrice} TK</small></p>
                <div className="card-actions justify-end">
                    <label onClick={() => setProduct(product)} htmlFor="product-booking-modal" className="btn btn-primary btn-xs">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseProductCard;