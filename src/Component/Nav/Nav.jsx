import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom'
import logo from '../Image/react.svg';
function Nav() {
    return (
        <Fragment>
            <nav className='flex justify-evenly bg-red-400'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <ul className='flex gap-8'>
                        <li>
                            <NavLink to="/home"
                                className={(isActive) => ` block py-2 pr-4 pl-3 ${isActive ? "bg-orange" : "text-orange-700"}duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 font-semibold`}
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/home"
                                className={(isActive) => ` block py-2 pr-4 pl-3 ${isActive ? "bg-orange" : "text-orange-700"}duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 font-semibold`}
                            >About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/home"
                                className={(isActive) => ` block py-2 pr-4 pl-3 ${isActive ? "bg-orange" : "text-orange-700"}duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 font-semibold`}
                            >Resume</NavLink>
                        </li>
                        <li>
                            <NavLink to="/home"
                                className={(isActive) => ` block py-2 pr-4 pl-3 ${isActive ? "bg-orange" : "text-orange-700"}duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 font-semibold`}
                            >Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default Nav
