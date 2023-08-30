"use client";

import React, { useState } from 'react'
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
      setNav(!nav);
};

  const navlinks = [
    { id: 1, text: "whoami", href: "/" },
    { id: 1, text: "about me", href: "/about-me" },
    { id: 1, text: "experience", href: "/experience" },
    { id: 1, text: "contact", href: "/contact" },
]

  return (
    <div className='h-auto w-full grid grid-cols-1 flex-wrap justify-center md:flex md:justify-between items-center bg-sky-950'>
      <div className='justify-center h-16 items-center ml-5 mt-6 text-white text-xl'>
        HELLO WORLD
      </div>
      <div className='w-4/5 flex-wrap'>
      <div className='hidden md:flex w-4/5 items-center h-16'>
        <ul className=' w-full md:flex items-center justify-end'>
            <div className='md:flex flex-wrap items-center h-16'>
                {navlinks.map((link) => (
                    <Link key={link.id} href={link.href}>
                    <div className="group relative hover:bg-gray-300 rounded-md transition-shadow">
                        <li className="block text-white hover:text-slate-800 p-2">
                        {link.text}
                        </li>
                    </div>
                    </Link>
                ))}
            </div>
        </ul>
      </div>
    </div>
          <div className={`md:flex md:items-center ${nav ? 'block' : 'hidden'}`}>
        <ul className=" bg-sky-950 border-t md:hidden border-t-slate-300 text-white py-10 flex-wrap top-0 right-0 w-full">
          <nav className="block text-sm items-center">
            {navlinks.map((link) => (
              <Link key={link.id} href={link.href}>
                <div className="group relative items-center text-center hover:bg-gray-300 rounded-md transition-shadow">
                  <li className="block text-white hover:text-slate-800 hover:uppercase p-2">
                    {link.text}
                  </li>
                </div>
              </Link>
            ))}
          </nav>
        </ul>
      </div>
    {/* mobile button */}
      <div
            onClick={handleNav}
            className="absolute text-white right-0 top-0 mr-5 mt-5 md:hidden z-10"
          >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </div>
  )
}

export default Header