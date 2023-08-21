import React from 'react'
import Navbar from "./Navbar";

function Header() {
  return (
    <div className='h-16 w-full flex justify-between items-center bg-sky-950'>
      <div className='justify-center items-center ml-5 text-white text-xl'>
        HELLO WORLD
      </div>
      <div className='w-4/5'>
      <Navbar />
      </div>
    </div>
  )
}

export default Header