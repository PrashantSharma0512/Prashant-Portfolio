import React from 'react'
import photo from '../Image/photoji.png'
import blob from '../Image/blob.svg'

import { FaLinkedinIn } from "react-icons/fa";
const Hero = () => {
  const egg = {
    display: 'block',
    width : '126px',
    height: '180px',
    backgroundColor: 'red',
    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
    
  }

  return (
    <div className='flex w-full h-full  max-md:block'>
      <div className=' w-full h-full text-white'>
        <div className=' flex justify-center items-center text-center bg-gradient-to-r from-pink-950 via-slate-500 to-purple-900 bg-clip-text text-6xl tracking-tight text-transparent select-none'>Prashant Sharma</div>
        <div className=' flex  flex-col justify-center items-center text-2xl'>
          <br />
          <span className='bg-gradient-to-r from-red-700 via-slate-500 to-yellow-500 bg-clip-text text-4xl tracking-tight text-transparent select-none'>Full Stack Developer</span>
          <br />
          “I am a passionate full-stack developer with a knack for crafting robust and scalable web applications. With years of hands-on experience, I have honed my skills in front-end technologies like React and tailwind, as well as back-end technologies like Node.js, MySQL, ExpressJS, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.”
        </div>
      </div>
      <br />
      <br />
      <div className=' w-full h-full  flex  justify-center items-center '>
        <div  className='w-auto h-auto bg-gradient-to-r from-indigo-300 to-indigo-800 hover:scale-105 hover:transition-all hover:duration-300  rounded-full overflow-hidden min-w-28 '><img src={photo} alt="hdjhjd" /></div>
      </div>
    </div>
  )
}

export default Hero
