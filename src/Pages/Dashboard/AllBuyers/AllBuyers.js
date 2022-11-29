import React from 'react';

const AllBuyers = () => {
    return (
        <div className='p-5'>
            <h1 className='font-bold'>Buyers Information:</h1>
            <div className="p-5 overflow-x-auto w-full">
                <table className="table w-full ">

                    <thead className=''>
                        <tr>
                            <td>SL No.</td>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr>
                            <td> 1</td>
                            <td> Khorshed alam</td>
                            <td> Zemlak, Daniel and Leanno</td>
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

export default AllBuyers;