import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Link } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleOnSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='p-5'>
            <h1 className='font-semibold pb-5'>Add A Product:</h1>
            <div className="card flex-shrink-0 w-80  md:w-1/2 lg:w-1/2 mx-auto shadow-2xl bg-base-100">
                <Form onSubmit={handleSubmit(handleOnSubmit)} >
                    <div className="card-body mb-0">
                        <div className='lg:flex lg:justify-between '>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name:</span>
                                </label>
                                <input type="text" placeholder="Product Name" {...register("name", { required: true })} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Resale Price:</span>
                                </label>
                                <input type="text" placeholder="Product Resale Price" {...register("resalePrice", { required: true })} className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='lg:flex lg:justify-between '>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Original Price:</span>
                                </label>
                                <input type="text" placeholder="Product Name" {...register("originalPrice", { required: true })} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Year of Purchase:</span>
                                </label>
                                <input type="text" placeholder="Year of Purchase" {...register("yearOfPurchase", { required: true })} className="input input-bordered" required />
                            </div>
                        </div>

                        <div className='lg:flex lg:justify-between w-full '>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Post Date:</span>
                                </label>
                                <input type="text" placeholder="Post Date" {...register("postdate", { required: true })} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Descriptions:</span>
                                </label>
                                <input type="text" placeholder="Products Descriptions" {...register("descriptions", { required: true })} className="input input-bordered" required />
                                {errors.name && <span className='text-red-500' >Phone Number is required</span>}
                            </div>
                        </div>
                        <div className='lg:flex lg:justify-between w-full ' >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number:</span>
                                </label>
                                <input type="text" placeholder="Phone Number" {...register("number", { required: true })} className="input input-bordered" required />
                                {errors.name && <span className='text-red-500' >Phone Number is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location:</span>
                                </label>
                                <input type="text" placeholder="Location" {...register("location", { required: true })} className="input input-bordered" required />
                                {errors.name && <span className='text-red-500' >Location is required</span>}
                            </div>
                        </div>
                        <div className='lg:flex lg:justify-between w-full '>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category:</span>
                                </label>
                                <select {...register("category", { required: true })} className="select select-bordered w-full" required>
                                    <option >01-ASUS</option>
                                    <option >02-HP</option>
                                    <option >03-DELL</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Condition:</span>
                                </label>
                                <select {...register("condition", { required: true })} className="select select-bordered w-full" required>
                                    <option >Excellent</option>
                                    <option >Good</option>
                                    <option >Fair</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo:</span>
                            </label>
                            <input type="file" placeholder="Products photo" {...register("photoFile", { required: true })} className="file-input file-input-bordered w-full" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-outline">Add Product</button>
                        </div>
                    </div>
                </Form>
            </div>

        </div>
    );
};

export default AddProduct;