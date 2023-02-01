import React, { useState } from 'react'
import {BiMenu} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {Link, animateScroll as scroll} from 'react-scroll'

const NavBar = () => {
    const [nav,setNav]= useState(false);
    const handleClick = ()=>{
        setNav(!nav);
    }
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg '>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
                <ul className='hidden md:flex'>
                    <li><Link  to="Home" smooth={true} offset={50} duration={500} className='cursor-pointer'>Home</Link></li>
                    <li><Link  to="About" smooth={true} offset={-200} duration={500} className='cursor-pointer'>About</Link></li>
                    <li><Link  to="Support" smooth={true} offset={-50} duration={500} className='cursor-pointer'>Support</Link></li>
                    <li><Link  to="Platforms" smooth={true} offset={-100} duration={500} className='cursor-pointer'>Platforms</Link></li>
                    <li><Link  to="Pricing" smooth={true} offset={-50} duration={500} className='cursor-pointer'>Pricing</Link></li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                <button className='py-3 px-8'>Sign Up</button>
            </div>
            <div className='md:hidden relative'>
                {      nav?<AiOutlineClose size={"25px"} onClick={handleClick}/>:       
                    <BiMenu size={"25px"} onClick={handleClick}/>
                }
            </div>
        </div>
        {
        
        <ul className={nav?'absolute bg-zinc-200 w-full px-8':'hidden'}>
                    <li className='border-b-2 border-zinc-300 w-full'><Link  to="Home" smooth={true} offset={50} duration={500} onClick={()=>{setNav(!nav)}}>Home</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link  to="About" smooth={true} offset={-200} duration={500} onClick={()=>{setNav(!nav)}}>About</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link  to="Support" smooth={true} offset={-50} duration={500} onClick={()=>{setNav(!nav)}}>Support</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link  to="Platforms" smooth={true} offset={-100} duration={500} onClick={()=>{setNav(!nav)}}>Platforms</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link  to="Pricing" smooth={true} offset={-50} duration={500} onClick={()=>{setNav(!nav)}}>Pricing</Link></li>
                    <div className='flex flex-col my-4'>
                        <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                        <button className='px-8 py-3'>Sign Up</button>
                    </div>
        </ul>
        }
    </div>
  )
}

export default NavBar