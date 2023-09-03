"use client"

import Link from 'next/link';
import React, { useState } from 'react'

import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

    const [menuOpen,setMenuOpen] = useState(false)

  return (
    <>
        <div className='bg-slate-100 h-[5rem] flex justify-between items-center px-4 md:px-12'>
            <div>
                <h3 className='text-2xl font-bold text-slate-950 cursor-pointer'><Link href='/'>GAURAV SINGH</Link></h3>
            </div>
            <div className='hidden md:block'>
                <div className='flex gap-4 text-slate-950 font'>
                    <p className='border-r-2 border-slate-950 pr-4'><Link href='/resume'>Resume</Link></p>
                    <p className='border-r-2 border-slate-950 pr-4'><Link href='/projects'>Projects</Link></p>
                    <p><Link href='/contacts'>Contacts</Link></p>
                </div>
            </div>
            {/* burger menu  */}
            <div className='md:hidden'>
                {menuOpen ? <AiOutlineClose size={30} onClick={()=> setMenuOpen(prev => !prev)} /> : <AiOutlineMenu size={30} onClick={()=> setMenuOpen(prev => !prev)} />}
            </div>
        </div>
        
        {/* mobile menu  */}

        {
        menuOpen ? 
            <div className='absolute h-screen bg-slate-500 top-[5rem] left-0 right-0'>
                <div className='flex flex-col items-center mt-12 gap-4 text-slate-950'>
                    <p className='text-3xl font-bold'><Link href='/resume' onClick={()=> setMenuOpen(prev =>!prev)}>Resume</Link></p>
                    <p className='text-3xl font-bold'><Link href='/projects' onClick={()=> setMenuOpen(prev =>!prev)}>Projects</Link></p>
                    <p className='text-3xl font-bold'><Link href='/contacts' onClick={()=> setMenuOpen(prev =>!prev)}>Contacts</Link></p>
                </div>
        </div>
        : 
        ''
        }
    </>
  )
}

export default Navbar