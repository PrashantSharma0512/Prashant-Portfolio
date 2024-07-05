import React, { Fragment } from 'react'
import about from '../Image/about.jpeg'
const About = () => {
  return (
    <div className='p-8 '>
        <div className=' text-center bg-gradient-to-r from-red-700  to-yellow-500 bg-clip-text text-5xl tracking-tight text-transparent select-none' id='about'>About</div>
        <br />
        <br />
    <div className='flex w-full h-full gap-4 max-md:flex-wrap'>
      <div className='w-full h-full text-white'><img src={about} alt="" /></div>
      <div className='w-full text-white text-2xl text-center max-md:text-left'>
        “I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL,Tailwind, and MongoDB. My journey in web development began with simple curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.”
      </div>
    </div>
    </div>
  )
}

export default About
