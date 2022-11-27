import React from 'react';
import logo from '../../../Assets/logo.jpg';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img src={logo} alt="" className='w-24 rounded' />
                    <p> <span className=' text-xl font-semibold'>PLATINAM</span><br />Providing reliable products since 2013</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content" data-theme="luxury">
                <div>
                    <p>Copyright © 2022 - All right reserved by 'PLATINAM'</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;