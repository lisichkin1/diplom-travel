import React from 'react'
import Image from 'next/image';
import logoPic from '../image/travel.png'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid'
function Header() {
  return (
    <header className='sticky top-0 z-50 
    grid grid-cols-3 
    bg-white shadow-md
     py-5 px-5 md:px-10'>
      {/* left */}
      <div className='relative flex items-center h-12 cursor-pointer my-auto'>
      <Image src={logoPic} 
      width='80'
      height='80' 
      objectFit="contain"
      objectPosition="left"
      />
      </div>
      {/* middle */}

      <div className='flex 
      items-center md:border-2 
      rounded-full py-2
      md:shadow-md'>
        <input className='mm:pl-5 flex-grow 
        bg-transparent outline-none
        text-base text-gray-600 placeholder-gray-400' 
        type="text" placeholder='Начни свой поиск...'/>
        <SearchIcon className='h-8 bg-blue-400 text-white 
        p-2 rounded-full cursor-pointer hidden md:inline-flex md:mx-3'/>
      </div>

      {/* right */}

      <div>
        <div className='flex items-center space-x-4 
          justify-end text-gray-600'>
          <p className='hidden md:inline text-center'>Станьте хозяином</p>
          <GlobeAltIcon className='hidden mm:inline h-6 cursor-pointer'/>
          <div className='flex items-center space-x-2 
          border-2 rounded-full p-2'>
          <MenuIcon className='h-6 cursor-pointer'/>
          <UserCircleIcon className='h-6 cursor-pointer'/>
        </div>
      </div>
      </div>
    </header>
    
  );
}

export default Header