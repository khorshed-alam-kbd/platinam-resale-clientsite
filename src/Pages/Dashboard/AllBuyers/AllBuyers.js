import { useQuery } from '@tanstack/react-query';
import swal from 'sweetalert';

const AllBuyers = () => {

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: () => fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/users?userRole=buyer`)
            .then(res => res.json())
    });

    const handleDeleteBuyer = (id, name) => {
        swal({
            text: `Are you sure to delete buyer ${name} account?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/users/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal({
                                    text: `Buyer ${name} account deleted successfully`,
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
            <h1 className='font-bold'>Buyers Information:</h1>
            <div className="p-5 overflow-x-auto w-full">
                <table className="table w-full">
                    <thead className=''>
                        <tr>
                            <td>SL No.</td>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='rounded'>
                        {
                            buyers.map((buyer, index) =>
                                <tr key={index}>
                                    <td> {index + 1} </td>
                                    <td> {buyer.userName} </td>
                                    <td> {buyer.email} </td>
                                    <th>
                                        <button onClick={() => handleDeleteBuyer(buyer._id, buyer.userName)} className="btn btn-outline btn-error btn-sm">Delete</button>
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
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;