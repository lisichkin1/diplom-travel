import React from 'react'
import Image from 'next/image';
import logoPic from '../image/travel.png'
function Header() {
  return (
    <header className='sticky top-0 z-50 
    grid grid-cols-3 
    bg-white shadow-md
     py-5 px-5 md:px-10'>
      {/* left */}
      <div className='relative flex items-center h-16 cursor-pointer my-auto'>
      <Image src={logoPic} 
      layout='fill' 
      objectFit="contain"
      objectPosition="left"
      />
      </div>
      {/* middle */}

      <div>

      </div>

      {/* right */}

      <div>

      </div>
    </header>
    
  );
}

export default Header