'use client'


import React from 'react'
import Link from 'next/link'
import SearchBar from "./SearchBar"
import ProfilNavBar from "./ProfilNavBar"
import Logo from "./logo"

const Navbar = () => {
  return (

    <div className='h-20 w-full border-b-2 flex items-center justify-between p-2'>


        <ul className='flex'>
            <li className='mr-6 cursor-pointer'>
               <Link href='/'> Home</Link> 
            </li>
            <li className='mr-6 cursor-pointer'>
               <Link href='/contact'> Contact</Link> 
            </li>
            <li className='mr-6 cursor-pointer'>
               <Link href='/about'> About</Link> 
            </li>
            <li className='mr-6 cursor-pointer'>
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
//     <ul class="flex">
//     <li class="mr-6">
//       <a class="text-blue-500 hover:text-blue-800" href="#">Active</a>
//     </li>
//     <li class="mr-6">
//       <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
//     </li>
//     <li class="mr-6">
//       <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
//     </li>
//     <li class="mr-6">
//       <a class="text-gray-600 cursor-not-allowed" href="#">Disabled</a>
//     </li>
//   </ul>

    
  )
}

export default Navbar