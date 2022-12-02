import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../Context/AuthProvider';

const ProductBookingModal = ({ product, refetch }) => {
    const { _id, productName, resalePrice } = product;
    console.log('modal', product);

    const { user } = useContext(AuthContext)
    console.log('modal', user)

    const { register, handleSubmit } = useForm();
    const handleOnSubmit = (data) => {
        const buyerName = user?.displayName
        const buyerEmail = user?.email
        const buyerPhoneNumber = data.buyerPhoneNumber
        const meetingLocation = data.meetingLocation
        const productStatus = 'booked'

        updateBookedProductToDb(buyerName, buyerEmail, productStatus, buyerPhoneNumber, meetingLocation);
        swal({
            text: `${productName} booked successfully`,
            icon: "success",
            button: "Done",
        });
        refetch();

    }
    const updateBookedProductToDb = (buyerName, buyerEmail, productStatus, buyerPhoneNumber, meetingLocation) => {
        const product = { buyerName, buyerEmail, productStatus, buyerPhoneNumber, meetingLocation }
        fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };
    return (
        <div>
            <input type="checkbox" id="product-booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="product-booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center p-3">{productName}</h3>

                    <Form onSubmit={handleSubmit(handleOnSubmit)} >
                        <div>
                            <div className='lg:flex gap-2 lg:justify-between '>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name:</span>
                                    </label>
                                    <input type="text" disabled value={user?.displayName} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email Address:</span>
                                    </label>
                                    <input type="text" disabled value={user?.email} className="input input-bordered" required />
                                </div>
                            </div>
                            <div className='lg:flex gap-2  lg:justify-between '>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name:</span>
                                    </label>
                                    <input type="text" disabled value={productName} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Price:</span>
                                    </label>
                                    <input type="text" disabled value={resalePrice} className="input input-bordered" required />
                                </div>
                            </div>
                            <div className='lg:flex gap-2  lg:justify-between w-full ' >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number:</span>
                                    </label>
                                    <input type="text" placeholder="Phone Number" {...register("buyerPhoneNumber", { required: true })} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Meeting Location:</span>
                                    </label>
                                    <input type="text" placeholder="Location" {...register("meetingLocation", { required: true })} className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline">Booked Now</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>

        </div>
    );
};

export default ProductBookingModal;