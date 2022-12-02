import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Form, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/AuthProvider';
import swal from 'sweetalert';


const AddProduct = () => {
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_NOT_SECRET_imageBB_key
    // console.log(imageHostKey)

    const { data: categories = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: () => fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/categories`)
            .then(res => res.json())
    });
    const { register, handleSubmit } = useForm();
    const handleOnSubmit = (data) => {

        const sellerName = user?.displayName
        const sellerEmail = user?.email
        const productName = data.productName
        const resalePrice = data.resalePrice
        const originalPrice = data.originalPrice
        const yearOfPurchase = data.yearOfPurchase
        const postDate = data.postDate
        const descriptions = data.descriptions
        const phoneNumber = data.phoneNumber
        const location = data.location
        const category = data.category
        const condition = data.condition
        const productStatus = 'available'

        const image = data.image[0]
        // console.log(image);
        const formData = new FormData();
        formData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((result) => {
                console.log('Image url', result.data.url);
                const productImage = result.data.url;
                console.log(productImage);
                uploadProductToDb(sellerName, sellerEmail, productName, resalePrice, originalPrice, yearOfPurchase, postDate, descriptions, phoneNumber, location, category, condition, productStatus, productImage);
                swal({
                    text: `${productName} added successfully`,
                    icon: "success",
                    button: "Done",
                });
                navigate('/dashboard/myProducts')
            })
            .catch((error) => {
                console.error('Error:', error);
                swal({
                    text: "something wrong, product not added",
                    icon: "error",
                    button: "Done",
                });
            });

    }
    const uploadProductToDb = (sellerName, sellerEmail, productName, resalePrice, originalPrice, yearOfPurchase, postDate, descriptions, phoneNumber, location, category, condition, productStatus, productImage) => {
        const product = { sellerName, sellerEmail, productName, resalePrice, originalPrice, yearOfPurchase, postDate, descriptions, phoneNumber, location, category, condition, productStatus, productImage }
        fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/products`, {
            method: 'POST',
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
        <div className='p-5'>
            <h1 className='font-semibold pb-5'>Add A Product:</h1>
            <div className="card flex-shrink-0 w-80  md:w-1/2 lg:w-1/2 mx-auto shadow-2xl bg-base-100">
                <Form onSubmit={handleSubmit(handleOnSubmit)} >
                    <div className="card-body mb-0">
                        <div className='lg:flex gap-2 lg:justify-between '>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name:</span>
                                </label>
                                <input type="text" placeholder="Product Name" {...register("productName", { required: true })} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Resale Price:</span>
                                </label>
                                <input type="text" placeholder="Product Resale Price" {...register("resalePrice", { required: true })} className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='lg:flex gap-2  lg:justify-between '>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Original Price:</span>
                                </label>
                                <input type="text" placeholder="Product original price" {...register("originalPrice", { required: true })} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Year of Purchase:</span>
                                </label>
                                <input type="text" placeholder="Year of Purchase" {...register("yearOfPurchase", { required: true })} className="input input-bordered" required />
                            </div>
                        </div>

                        <div className='lg:flex gap-2  lg:justify-between w-full '>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Post Date:</span>
                                </label>
                                <input type="text" placeholder="Post Date" {...register("postDate", { required: true })} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Descriptions:</span>
                                </label>
                                <input type="text" placeholder="Products Descriptions" {...register("descriptions", { required: true })} className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='lg:flex gap-2 lg:justify-between w-full ' >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number:</span>
                                </label>
                                <input type="text" placeholder="Phone Number" {...register("phoneNumber", { required: true })} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location:</span>
                                </label>
                                <input type="text" placeholder="Location" {...register("location", { required: true })} className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='lg:flex gap-2 lg:justify-between w-full '>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Category:</span>
                                </label>
                                <select {...register("category", { required: true })} className="select select-bordered w-full" required>
                                    {
                                        categories.map((category, i) => <option
                                            key={i}
                                        >{category.categoryName}</option>)
                                    }
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Condition:</span>
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
                                <span className="label-text">Product Photo:</span>
                            </label>
                            <input type="file" placeholder="Products photo" {...register("image", { required: true })} className="file-input file-input-bordered w-full" required />
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