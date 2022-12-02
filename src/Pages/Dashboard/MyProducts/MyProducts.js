import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/AuthProvider';
import swal from 'sweetalert';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/products/seller/?email=${email}`)
            .then(res => res.json())
    });
    // console.log(products)
    const handleDeleteProduct = (id, name) => {
        swal({
            text: `Are you sure to delete ${name} ?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/products/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal({
                                    text: `${name} deleted successfully`,
                                    icon: "success",
                                });
                                refetch();
                            }
                        });
                }
            });
    }
    const handleProductAdvertisement = (id, name) => {
        fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/products/advertisement/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ advertisementStatus: true })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    swal({
                        text: `Product ${name} advertisement successfully`,
                        icon: "success",
                    });
                    refetch();
                }
            })
            .catch(err => console.error(err));

    }

    return (
        <div className='p-5'>
            <h1 className='font-bold'>My Products:</h1>
            <div className="p-5 overflow-x-auto w-full">
                <table className="table w-full ">

                    <thead>
                        <tr>
                            <td>SL No.</td>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Advertisement</th>
                            <th>Delete</th>
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
                                    <td>
                                        {product.productName}
                                    </td>
                                    <td>
                                        {product.category}
                                    </td>
                                    <td>
                                        {product.productStatus}
                                    </td>
                                    <td>{product.resalePrice}</td>
                                    <th>
                                        {product.advertisementStatus !== true &&
                                            <button onClick={() => handleProductAdvertisement(product._id, product.productName)} className="btn btn-outline btn-sm">Advertised</button> || <></>
                                        }
                                    </th>
                                    <th>
                                        <button onClick={() => handleDeleteProduct(product._id, product.productName)} className="btn btn-outline btn-error btn-sm">Delete</button>
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
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;