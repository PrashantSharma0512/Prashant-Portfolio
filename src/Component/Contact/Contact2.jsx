import React from 'react'
import { SiMinutemailer } from "react-icons/si";
import { MdSend } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
const Contact2 = () => {
    const inpclass = "w-[90%] h-1/6 p-3 text-black"
    const SocialClass  = 'hover:scale-110'
    return (
        <center className='text-white'>
            <h1 id='c4' className='text-white text-5xl'>Get In Touch</h1>
            <div className=''>BHU,Lanka,Varanasi 221005.</div>
            <div className='flex justify-center items-center hover:scale-110'><SiMinutemailer />Email: &nbsp;<a href='mailto:prashantsharma0512@gmail.com'>prashantsharma0512@gmail.com</a></div>
            <div className='flex justify-center items-center hover:scale-110'><GiRotaryPhone />Phone No:&nbsp;<a href='tel:8874687288'>+91 8874687288</a></div>
            <div className='flex justify-center gap-3'>
                <a href="" className={SocialClass}><FaGithub size={30}/></a>
                <a href="" className={SocialClass}><LuTwitter size={30}/></a>
                <a href="" className={SocialClass} ><FaLinkedinIn  size={30}/></a>
                <a href="" className={SocialClass}><TbBrandLeetcode  size={30}/></a>
            </div>
            <br />
            <br />
            <form className='border-2 border-zinc-400 rounded-3xl' >
                <div className='flex max-md:block  max-md:pt-3'>
                    <div className='w-full  flex flex-col gap-3  justify-center items-center'>
                        <input type="text" className={inpclass} placeholder='Enter the Name' />
                        <input type="email" className={inpclass} placeholder='Enter the Email' />
                        <input type="number" className={inpclass} placeholder='Enter the Phone Number' />
                    </div>
                    <div className='w-full flex justify-center items-center p-6 text-black'>
                        <textarea name="" id="" rows={10} cols={60} className='resize-none black p-4' placeholder='Write Your Message' />
                    </div>
                </div>
                <button type="submit" className=' pl-4 pr-4 rounded-xl flex pt-2 pb-2 justify-center items-center gap-2 hover:bg-blue-400 bg-blue-700'>Send<MdSend size={20} color='white' /></button> <br />
            </form>

        </center>
    )
}

export default Contact2
