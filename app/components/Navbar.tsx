"use client";

import React, { useState } from 'react'
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
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
    <div className='md:flex w-4/5 items-center'>
        <ul className='hidden w-full md:flex items-center justify-end'>
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

    {/* mobile button */}
        <div
          onClick={handleNav}
          className="absolute text-white right-0 top-0 mr-5 mt-5 md:hidden z-10"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <div
        className={
          nav
            ? "md:hidden absolute z-10 left-0 right-0 top-16 h-80 bottom-0 w-full bg-gray-200 items-center duration-300"
            : "md:hidden absolute z-10 left-[-100%] top-16 right-0 h-80 bottom-0 w-full bg-gray-200 flex justify-center items-center duration-300"
        }
      >
        <ul className="bg-sky-950 border-t border-t-slate-300 text-white py-10 absolute top-0 right-0 w-full">
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
    </div>

  )
}

export default Navbar