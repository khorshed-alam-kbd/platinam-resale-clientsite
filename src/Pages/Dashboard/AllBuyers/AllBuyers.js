import { useQuery } from '@tanstack/react-query';
import swal from 'sweetalert';


const AllBuyers = () => {
    // const { user } = useContext(AuthContext);

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: () => fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/users?userRole=buyer`)
            .then(res => res.json())
    });

    const handleDeleteUser = (id) => {
        swal({
            title: "Are you sure to delete User?",
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
                                    title: "User deleted Successfully",
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
                                <tr>
                                    <td> {index + 1} </td>
                                    <td> {buyer.userName} </td>
                                    <td> {buyer.email} </td>
                                    <th>
                                        <button onClick={() => handleDeleteUser(buyer._id)} className="btn btn-outline btn-sm">Delete</button>
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