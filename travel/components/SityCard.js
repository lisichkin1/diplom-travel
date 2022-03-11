import React from 'react'
import Image from 'next/image'
function SityCard({img, location, distance}) {
  return (
    <div className='flex items-center 
    m-3 mt-5 space-x-7 overflow-hidden rounded-xl 
    cursor-pointer hover:bg-gray-200
    hover:scale-105 transition transform 
    duration-300 ease-out'>
        {/* left */}
        <div className='relative w-[90px] h-[90px] transform scale-150'>
            <Image src={img} layout='fill' className=' absolute rounded-full'/>
        </div>
        {/* right */}
        <h2 className='text-gray-600'>{location}</h2>
    </div>
  )
}

export default SityCard