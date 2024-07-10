import React from 'react'
import weather from '../Image/demo image.png'
import ecom from '../Image/ecom.png'
import otp from '../Image/Demo.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import port from '../Image/port.png'

const Project = () => {
    const cls = 'pt-1 pb-1 pl-5 pr-5 rounded-lg text-purple-900 bg-purple-500 bg-opacity-15 border border-transparent'
    return (
        <div className='flex flex-col justify-start items-center'>
            <center id='project' className='text-white text-4xl'>Projects</center>
            <br />
            <br />
            {/* first project */}
            <center className='w-full flex justify-center max-md:flex-wrap '>
                <div className='w-full pb-2 border-zinc-700'>
                    <center className=' flex justify-center items-center'>
                        <img src={weather} alt="" className='w-60 h-40' />
                    </center>
                </div>
                <div className='w-full text-left text-white p-4'>
                    <h1 className='text-2xl pb-2'>Weather App</h1>
                    The weather app is a simple web application built using HTML, CSS, and JavaScript. It provides real-time weather information based on the user’s location. <br />
                    <a href="https://prashantsharma0512.github.io/WeatherAppJS/" target='_blank' className='text-orange-400 '>[Project Link]</a>
                    <br />
                    <br />
                    <div className='flex gap-4'>
                        <span className={cls}>HTML</span>
                        <span className={cls}>CSS</span>
                        <span className={cls}>JavaScript</span>
                    </div>

                </div>
            </center>
            <br />
            <br />
            {/* second project */}
            <center className='flex justify-center max-md:flex-wrap '>
                <div className='w-full pb-2 border-zinc-700 '>
                    <center className=' flex justify-center items-center'>
                        <img src={ecom} alt="" className='w-60 h-40' />
                    </center>
                </div>
                <div className='w-full text-left text-white p-4'>
                    <h1 className='text-2xl pb-2'>E-Commerce Website</h1>
                    A modern e-commerce site created with React, styled using Tailwind CSS, and powered by Firebase. It includes features like product listings, cart functionality, and user authentication.
                    <br />
                    <br />
                    <div className='flex gap-4'>
                        <span className={cls}>React</span>
                        <span className={cls}>Tailwind</span>
                        <span className={cls}>Firebase</span>
                    </div>

                </div>
            </center>
            <br />
            <br />
            {/* Third project */}
            <center className=' w-full flex justify-center max-md:flex-wrap '>
                <div className='w-full pb-2 border-zinc-700 '>
                    <center className=' flex justify-center items-center'>
                        <img src={otp} alt="" className='w-60 h-40' />
                    </center>
                </div>
                <div className='w-full text-left text-white p-4'>
                    <h1 className='text-2xl pb-2'>OTP Generator</h1>
                    An OTP (One-Time Password) generator creates unique, temporary codes for secure authentication.Build using html,css,JavaScript. <br />
                    <a href="https://prashantsharma0512.github.io/OTP-Generator/" target='_blank' className='text-orange-400 '>[Project Link]</a>
                    <br />
                    <br />
                    <div className='flex gap-4'>
                        <span className={cls}>HTML</span>
                        <span className={cls}>CSS</span>
                        <span className={cls}>Javascript</span>
                    </div>

                </div>
            </center>
            <br />
            <br />
            {/* fourth project */}
            <center className='flex justify-center max-md:flex-wrap'>
                <div className='w-full pb-2 border-zinc-700 '>
                    <center className=' flex justify-center items-center'>
                        <img src={port} alt="" className='w-60 h-40' />
                    </center>
                </div>
                <div className='w-full text-left text-white p-4'>
                    <h1 className='text-2xl pb-2'>Portfolio Website</h1>
                    A sleek and responsive portfolio website crafted with React.js and styled using Tailwind CSS. Showcase your skills, projects, and achievements in an organized and visually appealing manner. <br />
                    <a href=" https://prashant-portfolio-one.vercel.app/" target='_blank' className='text-orange-400 '>[Project Link]</a>
                   
                    <br />
                    <br />
                    <div className='flex gap-4'>
                        <span className={cls}>HTML</span>
                        <span className={cls}>CSS</span>
                        <span className={cls}>Javascript</span>
                    </div>

                </div>
            </center>

        </div>
    )
}

export default Project
