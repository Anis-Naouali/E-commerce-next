'use client'


import React from 'react'
import Link from 'next/link'
import SearchBar from "./SearchBar"


const Navbar = () => {
  return (
    <div className='h-20 w-full border-b-2 flex items-center justify-between p-2'>
        <ul className='flex'>
            <li className='p-2 cursor-pointer'>
               <Link href='/'> Home</Link> 
            </li>
            <li className='p-2 cursor-pointer'>
               <Link href='/contact'> Contact</Link> 
            </li>
            <li className='p-2 cursor-pointer'>
               <Link href='/about'> About</Link> 
            </li>
            <li className='p-2 cursor-pointer'>
               <Link href='/signup'> Sign Up</Link> 
            </li>

            <li>
            <SearchBar/>
            </li>

        </ul>
    </div>

    
  )
}

export default Navbar