import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

import logo from '../../../Assets/logo.jpg';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut().then(() => { })
            .catch((error) => { });
    }
    const menuItems = <>
        < li > <Link to='/' className='rounded-lg font-semibold'> HOME</Link></li>
        < li > <Link to='/dashboard' className='rounded-lg font-semibold'>DASHBOARD</Link></li>
        {/* < li > <Link to='/blog' className='rounded-lg font-semibold'> BLOG</Link></li> */}
    </>
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                <Link to='/' className='btn btn-ghost normal-case text-xl'>
                    <img src={logo} alt='' className='w-10 rounded mr-1'></img>
                    <p>PLATINAM</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ">
                    {
                        menuItems
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <Link onClick={handleSignOut}><button className="btn btn-outline mr-5 rounded-lg">LOGOUT</button></Link>
                        :
                        <Link to='/login' ><button className="btn btn-outline mr-5 rounded-lg">LOGIN</button></Link>
                }

            </div>

        </div >
    );
};

export default Header;