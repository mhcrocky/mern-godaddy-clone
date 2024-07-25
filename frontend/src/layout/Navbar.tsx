

import React, { ReactNode, useState } from 'react';
import Logo from '../assets/logo.png';
import axios from '../helper/axios';
import { useEffect } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import { AddtoCart, ArrowDown, MenuToggleIcon } from '../helper/svg';
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
        axios.get(`/api/logout`, {
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
        axios.get(`/api/user-verify`, {
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
    const rightnavitemCls = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white";
    const NavItem = ({ children }: { children: ReactNode }) => {
        return (
            <li>
                <a href="#" className="text-sm block py-2 px-3 md:p-0 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{children}</a>
            </li>
        )
    }
    const DropDownItem = ({ handleClick, children }: { handleClick: () => void, children: ReactNode }) => {

        return (
            <li>
                <a href="#" onClick={handleClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                    <div className="inline-flex items-center">
                        {children}
                    </div>
                </a>
            </li>
        )
    }
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            <div className="flex flex-wrap items-center justify-between px-8 p-4">
                <Link to="/" onClick={() => navigate('/')} className="md:hidden flex items-center space-x-3 rtl:space-x-reverse pb-1 pr-20">
                    <img src={Logo} className="h-8 pr-20" alt="Logo" />
                </Link>
                <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse lg:min-w-[130px] items-center">
                    <div className={rightnavitemCls}>Help Center</div>
                    <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => toggleDropdown(!dropdownShow)}>
                        {user ? user.email : `Sign In`}
                        <ArrowDown />
                    </button>
                    <div className={`${rightnavitemCls}`}>
                        <AddtoCart />
                    </div>
                    <div className={`z-50 ${dropdownShow ? "" : "hidden"} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 absolute top-[50px] right-[80px]`}>
                        <ul className="py-2 font-medium" role="none">
                            {!user ?
                                <>
                                    <DropDownItem handleClick={() => navigate('/login')}>Login</DropDownItem>
                                    <DropDownItem handleClick={() => navigate('/register')}>Register</DropDownItem>
                                </> : <>
                                    <DropDownItem handleClick={() => navigate('/home')}>My Page</DropDownItem>
                                    <DropDownItem handleClick={() => logOut()}>LogOut</DropDownItem>
                                </>}
                        </ul>
                    </div>
                    <button onClick={() => toggleMenu(!menuShow)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <MenuToggleIcon />
                    </button>
                </div>
                <div className={`items-center justify-between ${menuShow ? "" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-language">
                    <Link to="/" onClick={() => navigate('/')} className="md:block hidden flex items-center space-x-3 rtl:space-x-reverse pb-1">
                        <img src={Logo} className="h-8 pr-6" alt="Logo" />
                    </Link>
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <NavItem>Domain Names</NavItem>
                        <NavItem>Websites&Hosting</NavItem>
                        <NavItem>Commerce</NavItem>
                        <NavItem>Email&Marketing</NavItem>
                        <NavItem>Export Services</NavItem>
                        <NavItem>More</NavItem>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
export default Navbar;