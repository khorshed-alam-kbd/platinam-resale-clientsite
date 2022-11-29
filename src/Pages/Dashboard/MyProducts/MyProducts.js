import React from 'react';

import logo from '../../../Assets/bannerImg.webp'

const MyProducts = () => {
    return (
        <div className='p-5'>
            <h1 className='font-bold'>My Orders:</h1>
            <div className="p-5 overflow-x-auto w-full">
                <table className="table w-full ">

                    <thead className='text-center'>
                        <tr>
                            <th>
                                SL No.
                            </th>
                            <th>Image</th>
                            <th>Product Status</th>
                            <th>Price</th>
                            <th>Advertisement</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr>
                            <th>
                                1
                            </th>
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
                                Sold
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-outline btn-sm">Advertised</button>
                            </th>
                            <th>
                                <button className="btn btn-outline btn-sm">Delete</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;