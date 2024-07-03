import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom'
import logo from '../Image/react.svg';
import  Drawerr  from './Drawerr';

function Nav() {
    return (

        <Fragment>
            <nav className='flex justify-evenly  p-6 max-md:flex-col max-md:w-screen'>
                {/* logo */}
                <div className=''>
                    <img src={logo} alt="" className='max-md:w-16 max-md:relative '/>
                </div>
                <div className='max-md:hidden'>
                    <ul className='flex gap-8 '>
                        <li>
                            <NavLink to="/"
                                className={(isActive) => ` block py-2 pr-4 pl-3 ${isActive ? "bg-orange" : "text-orange-700"}duration-200 text-zinc-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white hover:underline  lg:p-0 font-semibold `}
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"
                                className={(isActive) => ` block py-2 pr-4 pl-3 ${isActive ? "bg-orange" : "text-orange-700"}duration-200 text-zinc-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0 font-semibold hover:underline`}
                            >About</NavLink>
                        </li>
                        <li>
                            <a 
                            className='text-zinc-400 hover:text-white lg:p-0 font-semibold hover:underline'
                            href='#'
                            download='https://unsplash.com/photos/7WLPM8DWB44/download?force=true'
                            >Resume</a>
                        </li>
                        <li>
                            <NavLink to="/contact"
                                className={(isActive) => ` block py-2 pr-4 pl-3 ${isActive ? "bg-orange" : "text-orange-700"}duration-200 text-zinc-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0 font-semibold hover:underline `}
                            >Contacts</NavLink>
                        </li>
                    </ul>
                </div>
                <div className=''>
                    <Drawerr/>
                </div>
            </nav>
        </Fragment>
    )
}

export default Nav
