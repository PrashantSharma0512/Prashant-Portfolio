import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom'
import logo from '../Image/react.svg';
import Drawerr from './Drawerr';
import { FaLinkedinIn } from "react-icons/fa";
import { PiLastfmLogoBold } from "react-icons/pi";

function Nav() {
    return (

        <Fragment>
            <nav className='flex justify-between   max-md:p-8   w-auto h-auto '>
                {/* logo */}
                <div className='text-green-500 text-3xl'>
                    <Link to={'/'}><PiLastfmLogoBold color='white' size={60}/></Link>
                </div>
                <div className='max-md:hidden flex justify-center items-center gap-4 '>
                    <ul className='flex gap-8 '>
                        <li>
                            <NavLink to="/hero"
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
                            href='https://unsplash.com/photos/7WLPM8DWB44/download?force=true'
                                className='text-zinc-400 hover:text-white lg:p-0 font-semibold hover:underline cursor-pointer'
                                download={''}
                                
                            >Resume</a>
                        </li>
                        <li>
                            <NavLink to="/contact"
                                className={(isActive) => ` block py-2 pr-4 pl-3 ${isActive ? "bg-orange" : "text-orange-700"}duration-200 text-zinc-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0 font-semibold hover:underline `}
                            >Contacts</NavLink>
                        </li>
                        <li>
                            <a href='www.linkedin.com/in/prashant-sharma-0216ba251'>
                            <FaLinkedinIn color='white' size={30}/>
                            </a>
                        </li>
                    </ul>
                    

                </div>
                <div className='max-md:block hidden '>
                    <Drawerr />
                </div>
            </nav>
        </Fragment>
    )
}

export default Nav
