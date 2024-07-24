

import { useState } from 'react';
import Logo from '../assets/logo.png';
import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
interface UserType {
    email: string
}
const Navbar = () => {
    const navigate = useNavigate();
    const [dropdownShow, toggleDropdown] = useState<boolean>(false);
    const [menuShow, toggleMenu] = useState<boolean>(false);
    const [user, setUser] = useState<UserType | null>(null);

    const logOut = () => {
        const token: string | undefined = Cookies.get('_token');
        axios.get(`http://localhost:5000/api/logout`, {
            headers: {
                _token: token
            }
        }).then(() => {
            navigate('/')
            setUser(null)
        }).catch(() => {
            toast.error('Network Error');
        }) 
    }
    useEffect(() => {
        const token: string | undefined = Cookies.get('_token');
        axios.get(`http://localhost:5000/api/user-verify`, {
            headers: {
                _token: token
            }
        }).then((res) => {
            // console.log(res.data)
            setUser(res.data.data);
        }).catch(() => {
            setUser(null)
        })
    }, []);

    const navitemCls: string = "text-sm block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <Toaster position="top-center" reverseOrder={false}></Toaster>

            <div className="flex flex-wrap items-center justify-between px-8 p-4">
                <Link to="/" onClick={() => navigate('/')} className="md:hidden flex items-center space-x-3 rtl:space-x-reverse pb-1">
                    <img src={Logo} className="h-8" alt="Logo" />
                </Link>


                <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse lg:min-w-[130px] items-center">
                    <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => toggleDropdown(!dropdownShow)}>
                        {user ? user.email : `Sign In`}
                        <svg className="w-4 h-4 text-gray-800 dark:text-white p-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"></path>
                        </svg>
                    </button>
                    <div className={`z-50 ${dropdownShow ? "" : "hidden"} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 absolute top-[50px]`}>
                        <ul className="py-2 font-medium" role="none">
                            {!user ?
                                <>
                                    <li>
                                        <a href="#" onClick={() => navigate('/login')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                            <div className="inline-flex items-center">
                                                Login
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={() => navigate('/register')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                            <div className="inline-flex items-center">
                                                Register
                                            </div>
                                        </a>
                                    </li>
                                </> : <>
                                    <li>
                                        <a href="#" onClick={() => logOut()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                            <div className="inline-flex items-center">
                                                LogOut
                                            </div>
                                        </a>
                                    </li>
                                </>}
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-language" onClick={() => toggleMenu(!menuShow)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between ${menuShow ? "" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-language">
                    <Link to="/" onClick={() => navigate('/')} className="md:block hidden flex items-center space-x-3 rtl:space-x-reverse pb-1">
                        <img src={Logo} className="h-8" alt="Logo" />
                    </Link>
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className={navitemCls}>Domain Names</a>
                        </li>
                        <li>
                            <a href="#" className={navitemCls}>Websites&Hosting</a>
                        </li>
                        <li>
                            <a href="#" className={navitemCls}>Commerce</a>
                        </li>
                        <li>
                            <a href="#" className={navitemCls}>Email&Marketing</a>
                        </li>
                        <li>
                            <a href="#" className={navitemCls}>Export Services</a>
                        </li>
                        <li>
                            <a href="#" className={navitemCls}>More</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
export default Navbar;