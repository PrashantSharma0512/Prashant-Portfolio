import React from 'react'
import { GrReactjs } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { LiaJava } from "react-icons/lia";

const Techno = () => {
    const animation = "animate-[bounce_1.3s_ease-in-out_infinite] duration-500 rounded-2xl  p-4"
  return (
    <div className='pt-4'>
      <center className='text-white text-4xl pb-10 max-md:pt-6'>Skill</center>
      <div className='flex justify-center gap-8 flex-wrap '>
        <div className={animation}>
            <GrReactjs color='#5DE2E7' size={60}/>
        </div>
        <div className={animation}>
            <RiTailwindCssFill color='#218B8F' size={60}/>
        </div>
        <div className={animation}>
            <SiExpress color='gray' size={60}/>
        </div>
        <div className={animation}>
            <FaNode color='#2F9707' size={60} />
        </div>
        <div className={animation}>
            <SiMysql color='#159A9F' size={60}/>
        </div>
        <div className={animation}>
            <BiLogoMongodb color='#2F9707' size={60}/>
        </div>
        <div className={animation}>
            <LiaJava color='#F80508' size={60}/>          
        </div>
      </div>
    </div>
  )
}

export default Techno
