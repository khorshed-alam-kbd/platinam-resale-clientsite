import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hook/useAdmin';
import useBuyer from '../../hook/useBuyer';
import useSeller from '../../hook/useSeller';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const [isSeller, isSellerLoading] = useSeller(user?.email)
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email)

    if (isAdminLoading) {
        <div className='text-center'>
            <button className="btn-ghost loading">Please wait, Data is loading !</button>
        </div>
    }
    if (isBuyerLoading) {
        <div className='text-center'>
            <button className="btn-ghost loading">Please wait, Data is loading !</button>
        </div>
    }
    if (isSellerLoading) {
        <div className='text-center'>
            <button className="btn-ghost loading">Please wait, Data is loading !</button>
        </div>
    }
    // console.log(isBuyer);
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden flex justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-1/2 lg:w-80 bg-base-200 text-base-content font-semibold">

                        {
                            isBuyer && <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                        }

                        {
                            isSeller && <>
                                <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                                <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/reportedItems'>Reported Items</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default DashboardLayout;