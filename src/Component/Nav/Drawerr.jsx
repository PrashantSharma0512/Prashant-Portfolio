import React, { Fragment } from 'react'
import { useState } from 'react';
import logo from '../Image/react.svg'
import { Link } from 'react-router-dom'
import { BiMessageSquare } from "react-icons/bi";
import { FiHome, FiMenu } from 'react-icons/fi'
import { LiaCloudDownloadAltSolid } from "react-icons/lia";
import { RiContactsLine } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
const Drawerr = () => {
  const [isopen, setIsopen] = useState(false)
  const style = "hover:bg-zinc-400 uppercase w-full  "
  return (
    <Fragment>
      <div className={`max-md:bg-zinc-900 h-screen bg-zinc-900 text-white absolute  left-0 top-0 border border-black ${isopen ? 'left-0 transition-all duration-700 ' : 'left-[-300px] lg:hidden transition-all duration-1000'} `}>
        <br />
        <br />
        {/* logo */}
        <div className='flex justify-center h-10'><img src={logo} alt="" /></div>
        {/* list items */}
        <div className='text-2xl flex justify-center p-4'>
          <ul className={` uppercase w-full transition-all duration-1000 `}>
            <li className={style}>
              <Link to='/hero' className='flex gap-10'>
                <FiHome />home
              </Link>
            </li>
            <li className={style}>
              <Link to='/about' className='flex gap-10'><BiMessageSquare />about
              </Link>
            </li>
            <li className={style}>
              <a href='https://unsplash.com/photos/7WLPM8DWB44/download?force=true' className='flex gap-10 hover:cursor-pointer' ><LiaCloudDownloadAltSolid size={20} />resume
              </a>
            </li>
            <li className={style}><Link to='/contact' className='flex gap-10' >
              <RiContactsLine />Contact
            </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* hamburger menu */}
      <div className='cursor-pointer ' onClick={() => setIsopen(!isopen)}>{isopen ? <FaArrowLeft size={40} color='green' /> : <FiMenu size={40} color='green' />}</div>
    </Fragment>
  )
}

export default Drawerr
