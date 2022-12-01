import React from 'react';

const ProductDetailsCard = (product) => {
    const { productName, condition, productImage } = product.product
    console.log(product.product)
    return (
        <div className="card card-compact w-full h-3/4 bg-base-100 shadow-xl">
            <figure><img src={productImage} alt="laptops" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>{condition}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsCard;