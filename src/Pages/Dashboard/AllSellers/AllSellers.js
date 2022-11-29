import React from 'react';

const AllSellers = () => {
    return (
        <div className='p-5'>
            <h1 className='font-bold'>Sellers Information:</h1>
            <div className="p-5 overflow-x-auto w-full">
                <table className="table w-full ">

                    <thead className=''>
                        <tr>
                            <td>SL No.</td>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Verify</th>
                            <th>Delete </th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr>
                            <td> 1</td>
                            <td> Khorshed alam</td>
                            <td> Zemlak, Daniel and Leanno</td>
                            <th>
                                <button className="btn btn-outline btn-sm">Verify</button>
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

export default AllSellers;