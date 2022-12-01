import React from 'react';
import { useQuery } from '@tanstack/react-query';
import swal from 'sweetalert';
import { FcApproval } from "react-icons/fc";


const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: () => fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/sellers?userRole=seller`)
            .then(res => res.json())
    });
    // console.log(sellers)

    const handleDeleteSeller = (id, name) => {
        swal({
            text: `Are you sure to delete seller ${name} account ?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/sellers/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal({
                                    text: `Seller ${name} account deleted successfully`,
                                    icon: "success",
                                });
                                refetch();
                            }
                        });
                }
            });
    }
    const handleVerifySeller = (id, name) => {
        fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/sellers/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ userStatus: true })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    swal({
                        text: `Seller ${name} account verified successfully`,
                        icon: "success",
                    });
                    refetch();

                }
            })
            .catch(err => console.error(err));

    }

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
                        {
                            sellers.map((seller, index) =>
                                <tr key={index}>
                                    <td> {index + 1}</td>
                                    <td> {seller.userName}</td>
                                    <td> {seller.email}</td>
                                    <th>
                                        {
                                            seller.userStatus ? <p className='flex flex-row items-center gap-1 text-blue-600'><FcApproval />VERIFIED </p>
                                                : <button onClick={() => handleVerifySeller(seller._id, seller.userName)} className="btn btn-outline btn-success btn-sm">Verify</button>
                                        }
                                    </th>
                                    <th>
                                        <button onClick={() => handleDeleteSeller(seller._id, seller.userName)} className="btn btn-outline btn-error btn-sm">Delete</button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div >
    );
};

export default AllSellers;