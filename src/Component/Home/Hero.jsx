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
    <div className='flex '>
      <div className=' w-full h-full text-white'>
        <div className=' flex justify-center items-center text-6xl'>Prashant Sharma</div>
        <div className=' flex justify-center items-center text-2xl'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo dolore numquam soluta doloremque, nulla similique autem sunt neque recusandae officia possimus voluptatem quod, at dolorem adipisci maxime sit eaque hic necessitatibus corporis aspernatur omnis amet? Tempora eum adipisci quo itaque illum sunt in voluptatibus beatae quas, incidunt vitae quod enim!
        </div>

      </div>
      <div className=' w-full h-full flex justify-center items-center rounded-full relative'>
        <div  className='w-auto h-auto bg-gradient-to-l from-indigo-700 ... rounded-full overflow-hidden'><img src={photo} alt="hdjhjd" /></div>
        {/* <div className='rounded-full bg-yellow-50 p-8 overflow-hidden flex items-center'><img src={photo} alt="" /></div> */}
      </div>
    </div>
  )
}

export default Hero
