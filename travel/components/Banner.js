import React from 'react'
import Image from 'next/image';
import BannerPic from '../image/tavel-banner.jpg' 
function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image src={BannerPic}
        objectFit='cover'
        layout='fill'
        />
        <div className='absolute top-1/2 w-full text-center'>
          <p className=' text-sm sm:text-2xl text-white font-bold'>
            Не знаете, куда поехать? Отлично
          </p>
          <button className='text-white bg-blue-400 
          px-10 py-4 rounded-full shadow-lg font-bold 
          my-4 hover:shadow-2xl active:scale-90 
          transition duration-100'>
            Я найду
          </button>
        </div>
    </div>
  )
}

export default Banner