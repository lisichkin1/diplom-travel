import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
function SityCard({img, location, distance}) {

  const router = useRouter();
  const{startDate, endDate, quantityOfGuest} = router.query
  return (
    <div onClick={() => router.push(`search?location=${location}&startDate=2022-03-11T22%3A48%3A44.217Z&endDate=2022-03-11T22%3A48%3A44.217Z&quantityOfGuest=1`)} className='flex items-center 
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
//end
export default SityCard