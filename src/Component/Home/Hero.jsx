import React, { Fragment } from 'react'
import prashant from '../Image/about.jpeg'
import prash from '../Image/prasha.jpg'
import Techno from './Techno';
import Project from './Project';
import Contact2 from '../Contact/Contact2';
const Hero = () => {
  const egg = {
    display: 'block',
    width: '126px',
    height: '180px',
    backgroundColor: 'red',
    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',

  }

  return (
    <Fragment>
      <div className='flex w-full h-full  max-md:block'>
        <div className=' w-full h-full text-white'>
          <div className=' flex justify-center items-center text-center bg-gradient-to-r from-pink-950 via-slate-500 to-purple-900 bg-clip-text text-6xl tracking-tight text-transparent select-none'>Prashant Sharma</div>
          <div className=' flex  flex-col justify-center items-center text-2xl px-4 text-justify'>
            <br />
            <span className='bg-gradient-to-r from-red-700 via-slate-500 to-yellow-500 bg-clip-text text-4xl tracking-tight text-transparent select-none'>Full Stack Developer</span>
            <br />
            
              I am a passionate full-stack developer with a knack for crafting robust and scalable web applications. With years of hands-on experience, I have honed my skills in front-end technologies like React and tailwind, as well as back-end technologies like Node.js, MySQL, ExpressJS, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
          </div>
        </div>
        <br />
        <br />
        <div className=' w-full h-full  flex  justify-center items-center '>
          <div className='w-[450px] h-[450px] max-md:w-[300px] max-md:h-[300px]  bg-gradient-to-r  hover:scale-105 hover:transition-all hover:duration-300  rounded-full overflow-hidden min-w-28 '><img src={prash} alt="photo"  /></div>
        </div>
      </div>
      <Techno />
      <Project />
      <Contact2 />
    </Fragment>
  )
}

export default Hero
