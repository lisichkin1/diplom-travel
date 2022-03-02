import React from 'react'
import Image from 'next/image'
function SityCard({img, location, distance}) {
  return (
    <div className='flex items-center 
    m-3 mt-5 space-x-5 rounded-xl 
    cursor-pointer hover:bg-gray-200
    hover:scale-105 transition transform 
    duration-300 ease-out'>
        {/* left */}
        <div className='relative h-20 w-20'>
            <Image src={img} layout='fill' className='rounded-2xl'/>
        </div>
        {/* right */}
        <h2 className='text-gray-600'>{location}</h2>
    </div>
  )
}

export default SityCard