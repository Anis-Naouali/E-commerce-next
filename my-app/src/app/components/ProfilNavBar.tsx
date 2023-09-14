import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { deleteCookie } from 'cookies-next';
import axios from 'axios';
import Link from 'next/link';


const ProfilNavBar: React.FC = () => {
  const router = useRouter();

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
 
  const handleLogOut = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/logout");
      if (response.data.message) {
        
          window.location.href = "/";
        }
      }
    catch (error) {
      console.error(error);
    };
}
  return (

    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 absolute right-0 ">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 right-0 mb-6 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="relative rounded-full p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"       
            onClick={() => router.push('/wishlist')}

            >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">View notifications</span>
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1C3.239 1 1 3.23669 1 5.99621C1 8.22381 1.875 13.5107 10.488 18.8551C10.6423 18.9499 10.8194 19 11 19C11.1806 19 11.3577 18.9499 11.512 18.8551C20.125 13.5107 21 8.22381 21 5.99621C21 3.23669 18.761 1 16 1C13.239 1 11 4.028 11 4.028C11 4.028 8.761 1 6 1Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
         
          <button
            type="button"
            className="relative rounded-full p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"    
            onClick={() => router.push('/cart')}
            >
           
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">View notifications</span>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 5H7L10 22H26" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              
              <path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </button>

          <div className="relative ml-3">
            <div>
              <button
                type="button"
                className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded={menuVisible}
                aria-haspopup="true"
                onClick={toggleMenu}
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${menuVisible ? 'absolute' : 'hidden'
          } right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
      >
        <a onClick={toggleMenu}

          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          id="user-menu-item-0"
        >
          <Link href="/Account">Manage my account   </Link>
                </a>
        <a onClick={toggleMenu}

          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          id="user-menu-item-1"
        >
         <Link href="/cart"> My order</Link>
        </a>
        <a onClick={toggleMenu}

          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          id="user-menu-item-2"
        >
          My cancellations        </a>
        <a onClick={toggleMenu}

          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          id="user-menu-item-2"
        >
          My reviews        </a>
        <a onClick={handleLogOut}

          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          id="user-menu-item-2"
        >
          Logout        </a>
      </div>
    </div>


  )
}

export default ProfilNavBar