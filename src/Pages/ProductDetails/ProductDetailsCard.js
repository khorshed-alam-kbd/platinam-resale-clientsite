import React, { useContext } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../Context/AuthProvider';

const ProductDetailsCard = ({ product, setProduct }) => {
    const { user } = useContext(AuthContext);
    const reportedBy = user?.email;
    const reportStatus = 'reported'
    const { _id, sellerName, sellerEmail, productName, resalePrice, originalPrice, yearOfPurchase, postDate, descriptions, phoneNumber, location, productStatus, condition, productImage } = product;
    console.log(sellerEmail);

    // const { data: user, isLoading, refetch } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: () => fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/users/${sellerEmail}`)
    //         .then(res => res.json())
    // });
    // if (isLoading) return <button className="btn btn-square loading"></button>

    const handleReport = (id) => {
        swal({
            text: `Are you sure to report this ${productName} product ?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const product = { reportedBy, reportStatus }
                    fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/products/report/${id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.modifiedCount > 0) {
                                swal({
                                    text: `Reported successfully`,
                                    icon: "success",
                                });
                            }
                        });
                }
            });

    }

    const bookedAlert = () => {
        swal({
            text: `${productName} is already booked`,
            icon: "warning",
            button: "Done",
        });

    }

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
                    <button onClick={() => handleReport(_id)} className="btn btn-outline btn-sm">Report</button>
                    {
                        productStatus !== 'booked' &&
                        <label onClick={() => setProduct(product)} htmlFor="product-booking-modal" className="btn btn-primary btn-sm">Book Now</label>
                        ||
                        <label onClick={bookedAlert} className="btn btn-primary btn-sm">Booked</label>
                    }
                </div>
            </div>
        </div >
    );
};

export default ProductDetailsCard;