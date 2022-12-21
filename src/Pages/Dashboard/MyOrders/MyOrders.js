import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/products/buyer?email=${email}`)
            .then(res => res.json())
    });
    if (isLoading) {
        <div className='text-center'>
            <button className="btn btn-ghost loading">Please wait, Data is loading !</button>
        </div>
    }
    console.log(products)
    return (
        <div className='p-5'>
            <h1 className='font-bold'>My Orders:</h1>
            <div className="p-5 overflow-x-auto w-full">
                {
                    products.length ?
                        <table className="table w-full ">
                            <thead>
                                <tr>
                                    <th>SL No.</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Condition</th>
                                    <th>Price</th>
                                    <th>Pickup Point</th>
                                    <th>Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product, i) =>
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>
                                                <div className="flex space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={product.productImage} alt="laptop" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{product.productName}</td>
                                            <td>{product.condition}</td>
                                            <td>{product.resalePrice}</td>
                                            <td>{product.meetingLocation}</td>
                                            <th>
                                                <button className="btn btn-outline btn-sm">Pay Now</button>
                                            </th>
                                        </tr>)
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table> : <div className='text-center text-3xl'>You have no order. Oder product !!</div>

                }

            </div>
        </div >
    );
};

export default MyOrders;