import React from 'react'
import Image from 'next/image';
import logoPic from '../image/travel.png'
function Header() {
  return (
    <header className='sticky top-0 z-50'>
      {/* left */}
      <div className='relative flex items-center h-20 cursor-pointer my-auto'>
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