import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import swal from 'sweetalert';

const ReportedItems = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/products?reportStatus=reported`)
            .then(res => res.json())
    });
    // console.log(products)

    const handleReportedItemDelete = (id) => {
        swal({
            text: `Are you sure to delete this product?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/products/report/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal({
                                    text: `This product deleted successfully`,
                                    icon: "success",
                                });
                                refetch();
                            }
                        });
                }
            });


    }
    return (
        <div className='p-5'>
            <h1 className='font-bold'>Reported Items:</h1>
            <div className="p-5 overflow-x-auto w-full">
                <table className="table w-full ">
                    <thead>
                        <tr>
                            <th>SL No.</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Product Category</th>
                            <th>Reported by</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {
                        isLoading ?
                            < div className='text-center'><button className="btn-ghost loading">Please wait, Data is loading !</button></div>
                            :
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
                                            <td>{product.category}</td>
                                            <td>{product.reportedBy}</td>
                                            <th>
                                                <button onClick={() => handleReportedItemDelete(product._id)} className="btn btn-outline btn-error btn-sm">Delete</button>
                                            </th>
                                        </tr>)
                                }
                            </tbody>
                    }
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;