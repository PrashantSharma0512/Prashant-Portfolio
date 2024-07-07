import React, { Fragment } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { BiMessageSquare } from "react-icons/bi";
import { FiHome, FiMenu } from 'react-icons/fi'
import { LiaCloudDownloadAltSolid } from "react-icons/lia";
import { RiContactsLine } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import { BiLogoPinterest } from "react-icons/bi";
const Drawerr = () => {
  const [isopen, setIsopen] = useState(false)
  const style = "hover:bg-zinc-400 uppercase w-full  "
  return (
    <Fragment>
      <div className={`max-md:bg-zinc-900 h-screen bg-zinc-900 text-white absolute  left-0 top-0 border border-black ${isopen ? 'left-0 transition-all duration-700 ' : 'left-[-300px] lg:hidden transition-all duration-1000'} `}>
        <br />
        <br />
        {/* logo */}
        <div className='flex justify-center items-center h-10'><BiLogoPinterest color='white' size={50} /></div>
        {/* list items */}
        <div className='text-2xl flex justify-center p-4'>
          <ul className={` uppercase w-full transition-all duration-1000 `}>
            <li className={style}>
              <Link to='/' className='flex gap-10' onClick={() => setIsopen(!isopen)}>
                <FiHome />home
              </Link>
            </li>
            <li className={style}>
              <a href='#project' className='flex gap-10' onClick={() => setIsopen(!isopen)}><BiMessageSquare />Project
              </a>
            </li>
            <li className={style}>
              <a href='https://unsplash.com/photos/7WLPM8DWB44/download?force=true'onClick={() => setIsopen(!isopen)} className='flex gap-10 hover:cursor-pointer' ><LiaCloudDownloadAltSolid size={20} />resume
              </a>
            </li>
            <li className={style}><a href='#c4' className='flex gap-10' onClick={() => setIsopen(!isopen)} >
              <RiContactsLine />Contact
            </a>
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
