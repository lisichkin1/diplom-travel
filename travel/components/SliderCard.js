import React from 'react'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'

function SliderCard({img, title}) {
  return (
    
      <div className='cursor-pointer'>
        <div className='relative h-[200px] w-[300px] sm:h-[350px] sm:w-[550px]'>
            <Image src={img} layout="fill" className='rounded-2xl'/>
        </div>
        <h3 className='text-gray-600 text-2xl font-normal'>{title}</h3>
    </div>
  )
}

export default SliderCard