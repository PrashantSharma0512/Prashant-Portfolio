import React from 'react'
import { SiMinutemailer } from "react-icons/si";
import { MdSend } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
const Contact2 = () => {

    const inpclass = "w-[90%] h-1/6 p-3 text-black rounded-lg focus:outline-none"
    const SocialClass = 'hover:scale-110'
    return (
        <center className='text-white'>
            <h1 id='c4' className='text-white text-5xl'>Get In Touch</h1>
            <div className=''>BHU,Lanka,Varanasi 221005.</div>
            <div className='flex justify-center items-center hover:scale-110'><SiMinutemailer />Email: &nbsp;<a href='mailto:prashantsharma0512@gmail.com'>prashantsharma0512@gmail.com</a></div>
            <div className='flex justify-center items-center hover:scale-110'><GiRotaryPhone />Phone No:&nbsp;<a href='tel:8874687288'>+91 8874687288</a></div>
            <div className='flex justify-center gap-3'>
                <a href="https://github.com/PrashantSharma0512"
                    target='_blank' className={SocialClass}><FaGithub size={30} /></a>
                <a href="https://x.com/PraShant051202"
                    target='_blank' className={SocialClass}><LuTwitter size={30} /></a>
                <a href='https://www.linkedin.com/in/prashant-sharma-0216ba251'
                    target='_blank' className={SocialClass} ><FaLinkedinIn size={30} /></a>
                <a href="https://leetcode.com/u/Prashant_0512/"
                    target='_blank' className={SocialClass}><TbBrandLeetcode size={30} /></a>
                <a href="https://www.geeksforgeeks.org/user/prashantsharma0512/"
                    target='_blank' className={SocialClass}><SiGeeksforgeeks size={30} /></a>
            </div>
            <br />
            <br />
            <form className='border-2 border-zinc-400 rounded-3xl' method='POST' action='https://formspree.io/f/mjkbvlqr'>
                <div className='flex max-md:block  max-md:pt-3'>
                    <div className='w-full  flex flex-col gap-3  justify-center items-center'>
                        <input
                            type="text"
                            name='name'
                            className={inpclass}
                            placeholder='Enter the Name'
                            required
                        />
                        <input
                            type="email"
                            name='email'
                            className={inpclass}
                            placeholder='Enter the Email'
                            required
                        />
                        <input
                            name='number'
                            type="number"
                            className={inpclass}
                            placeholder='Enter the Phone Number'
                            required
                        />
                    </div>
                    <div className='w-full flex justify-center items-center p-6 text-black'>
                        <textarea
                            name="message"
                            id=""
                            rows={10}
                            cols={60}
                            className='resize-none black p-4 rounded-lg focus:outline-none '
                            autoComplete='on'
                            placeholder='Write Your Message'
                            required
                        ></textarea>
                    </div>
                </div>
                <button type="submit" className=' pl-4 pr-4 rounded-xl flex pt-2 pb-2 justify-center items-center gap-2 hover:bg-blue-400 bg-blue-700' name='send'>Send<MdSend size={20} color='white' /></button> <br />
            </form>

        </center>
    )
}

export default Contact2
