"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu ,HiX} from "react-icons/hi";
import { motion } from 'framer-motion';
import '@/app/globals.css';
import Image from 'next/image';
import images from '../../constants/images';

const NavBar = () => {
   
    // State Managment
    const [toggleDropDown,setToggleDropDown] = useState(false);
  

    return (
      <div>

        <nav className="w-full px-8 absolute top-4  left-0 flex justify-between md:justify-around  h-14 items-center z-50  " > 
            <Link className=" items-center text-center  flex text-pretty font-serif font-medium text-xl text-white "  href="/">
              <Image 
              src={images.AgLogo}
              alt="Logo" 
              width={75} 
              height={75}
              />
            </Link>
     
            {/* ? Desktop  Nav*/}
            <div className="justify-around h-full py-2  md:flex hidden" >
                <Link  href="/" className="px-3 mx-2   items-center justify-center   font-semibold text-[var(--text-color-primary)] flex text-center  rounded-md hover:bg-white hover:text-[color:var(--main-color)] duration-500 " >Home</Link>
                <Link href="/#AboutMe"   className="px-3 mx-2  items-center justify-center font-semibold text-[var(--text-color-primary)] flex text-center  rounded-md hover:bg-white hover:text-[color:var(--main-color)] duration-500 " >About Me</Link>
                <Link  href="/Projects" className="px-3 mx-2  items-center justify-center font-semibold text-[var(--text-color-primary)] flex text-center  rounded-md hover:bg-white hover:text-[color:var(--main-color)] duration-500 " >Projects</Link>
                <Link href="/testimonials" className="px-3 mx-2  items-center justify-center font-semibold text-[var(--text-color-primary)] flex text-center  rounded-md hover:bg-white hover:text-[color:var(--main-color)] duration-500 " >testimonials</Link>
            </div>
            <div className="md:flex hidden">
              <button className=" text-[var(--main-color)] hover:text-white font-semibold hover:bg-[var(--main-color)] border-[color:var(--main-color)]  border py-2 px-5 rounded-2xl mx-2  duration-500">Contact Us</button>
            </div>
            {/* ? Mobile  Nav*/}
            <div className='md:hidden h-full flex items-center justify-end '>
                <div className=" flex items-center justify-end   " style={{ transition: "opacity 0.7s ease-in-out" }}>
                {!toggleDropDown &&
                <HiMenu style={{transition:'0.4s'}} className="p-1 size-8 relative rounded-full bg-white hover:bg-[var(--main-color)]  hover:text-white text-[var(--text-color-primary)] " 
                  onClick={()=> setToggleDropDown(!toggleDropDown)} />}
                {toggleDropDown && <HiX style={{transition:'0.4s'}} className="p-1 size-8 relative rounded-full  hover:bg-[var(--main-color)] text-[var(--text-color-primary)]  hover:text-white" onClick={()=> setToggleDropDown(!toggleDropDown)} />}

            {toggleDropDown && (
                <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                            className={` top-full flex flex-col items-start justify-between absolute h-80  right-0 sm:w-2/3 w-5/6 p-4 shadow-2xl rounded-b-xl overflow-y-auto bg-white `} 
                          >
                    {/* <div className="absolute flex flex-col items-end  bg-white  top-full right-0  w-2/3 p-3" > */}
                       <Link  href="/" className="m-1   font-semibold text-[var(--text-color-primary)] hover:text-[color:var(--main-color)]"  style={{transition:'0.4s'}}>Home</Link>
                       <Link href="/#AboutMe"  className="m-1  font-semibold text-[var(--text-color-primary)] hover:text-[color:var(--main-color)]"  style={{transition:'0.4s'}}>About Me</Link>
                       <Link href="/Services" className="m-1  font-semibold text-[var(--text-color-primary)] hover:text-[color:var(--main-color)]"  style={{transition:'0.4s'}}>Services</Link>
                       <Link  href="/Projects" className="m-1  font-semibold text-[var(--text-color-primary)] hover:text-[color:var(--main-color)]"  style={{transition:'0.4s'}}>Projects</Link>
                       <Link href="/testimonials" className="m-1  font-semibold text-[var(--text-color-primary)] hover:text-[color:var(--main-color)]"  style={{transition:'0.4s'}}>testimonials</Link>
                       <button className=" text-[var(--main-color)] hover:text-white font-semibold hover:bg-[var(--main-color)] border-[color:var(--main-color)]  border py-2 px-5 rounded-2xl   duration-500">Contact Us</button>

                    {/* </div> */}
                    </motion.div>
            )}
                </div>
                
            </div>
        </nav>
      </div>
    );
}

export default NavBar;