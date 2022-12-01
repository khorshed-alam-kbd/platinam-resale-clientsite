import React from 'react';

const ProductDetailsCard = ({ product, setProduct }) => {
    const { sellerName, sellerEmail, productName, resalePrice, originalPrice, yearOfPurchase, postDate, descriptions, phoneNumber, location, condition, productImage } = product;
    console.log(sellerEmail);

    // const { data: user, isLoading, refetch } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: () => fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/users/${sellerEmail}`)
    //         .then(res => res.json())
    // });
    // if (isLoading) return <button className="btn btn-square loading"></button>

    return (
        <div className="card lg:card-side w-full bg-base-100 shadow-xl rounded">
            <figure className='lg:w-1/2'><img src={productImage} alt="laptops" /></figure>
            <div className="card-body bg-base-200">
                <h2 className="card-title">{productName}</h2>
                <p><span className='font-semibold'> Selling Price:</span>  {resalePrice} TK</p>
                <p><span className='font-semibold'>Buying Price:</span>  {originalPrice} TK</p>
                <p><span className='font-semibold'>Condition:</span>  {condition}</p>
                <p><span className='font-semibold'>Year of Purchase:</span>  {yearOfPurchase}</p>
                <p><span className='font-semibold'>Descriptions:</span>  {descriptions}</p>
                <p><span className='font-semibold'>Location:</span>  {location}</p>
                <p><span className='font-semibold'>Contact Number:</span>  {phoneNumber}</p>
                <p><span className='font-semibold'>Seller Name:</span>  {sellerName}</p>
                <p><span className='font-semibold'>Post Date:</span>  {postDate}</p>
                <div className="card-actions justify-between mt-2">
                    <button className="btn btn-outline btn-sm">Report</button>
                    <label onClick={() => setProduct(product)} htmlFor="product-booking-modal" className="btn btn-primary btn-sm">Book Now</label>
                </div>
            </div>
        </div >
    );
};

export default ProductDetailsCard;