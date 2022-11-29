import React from 'react';

const AllBuyers = () => {
    return (
        <div className='p-5'>
            <h1 className='font-bold'>My Orders:</h1>
            <div className="p-5 overflow-x-auto w-full">
                <table className="table w-full ">

                    <thead className=''>
                        <tr>
                            <th>SL No.</th>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Delete Buyer</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr>
                            <th> 1</th>
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