'use client'


import React from 'react'
import Link from 'next/link'
import SearchBar from "./SearchBar"
import ProfilNavBar from "./ProfilNavBar"
import Logo from "./logo"

const Navbar = () => {
  return (
   

    <div className='h-20 w-full border-b-2 flex items-center justify-between p-2'>

{/* <div className="w-28 h-6 justify-center items-center inline-flex">
  <div className="text-black text-2xl font-bold leading-normal tracking-wide">Exclusive</div>
</div> */}

        <ul className='flex'>

      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black h-8 mr-20">Exclusive</span>
  

            <li className='self-center mr-6 cursor-pointer'>
               <Link href='/'> Home</Link> 
            </li>
            <li className='self-center mr-6 cursor-pointer'>
               <Link href='/contact'> Contact</Link> 
            </li>
            <li className='self-center mr-6 cursor-pointer'>
               <Link href='/about'> About</Link> 
            </li>
            <li className='self-center mr-6 cursor-pointer'>
               <Link href='/signup'> Sign Up</Link> 
            </li>

            <li className='mr-6 cursor-pointer'>
            <SearchBar/>
            </li>
            <li className='mr-6 cursor-pointer'>
               <ProfilNavBar/>
            </li>
        </ul>  
    </div>

    
  )
}

export default Navbar