import React from 'react';
import logo from '../../../Assets/logo.jpg'

const MyOrders = () => {
    return (
        <div className='p-5'>
            <h1 className='font-bold'>My Orders:</h1>
            <div className="p-5 overflow-x-auto w-full">
                <table className="table w-full ">
                    <thead className='text-center'>
                        <tr>
                            <td>SL No.</td>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr>
                            <td>1</td>
                            <td>
                                <div className="flex justify-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={logo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leanno
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-outline btn-sm">Pay Now</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;