import React,{ useState } from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function cities({citieseData}) {
    const [citypick, setCitypick] = useState('Москва');
    console.log(citypick)
    const router = useRouter();
    
    const searchCity =()=>{
        router.push({
          pathname:'/tours',
          query:{
            city:citypick,
          }
        })
      }
    
  return (
    <div>
         <Header placeholder=''/>
         <button className='button text-white hover:shadow-2xl 
         hover:shadow-blue-800 bg-blue-400 sticky top-40 left-[90%] z-50 h-16' onClick={searchCity}>Выбрать номер</button>
         <div className='flex items-center justify-center flex-col'>
            <p className='text-xl'>Выберите город, который вы хотели бы посетить</p>
            <p className='text-sm text-gray-500'>В каждой карточке города вы можете посмотреть его лучшие достопримечательности, которые сможете посетить</p>
        </div>
    <div className='flex items-center justify-center flex-wrap'>
        {citieseData.map(({img, city, SightOneImg,
         SightOne, DesSightOne, SightTwo, DesSightTwo, SightTwoImg, SightThree,
         DesSightThree, SightThreeImg, SightFour, DesSightFour, SightFourImg,
         SightFive, DesSightFive, SightFiveImg}) =>(
             <div className='flex items-center justify-center flex-col p-3
             hover:shadow-2xl hover:shadow-blue-500/50 duration-200 
             ease-out border-2 w-[700px] m-5 rounded-lg'>
                 <div className='flex items-center justify-center'>
                     <p className='text-xl'>{city}</p>
                 </div>
                 <div className=''>
                 <Swiper
                 modules={[Navigation, Pagination]}
                 spaceBetween={20}
                 navigation
                 pagination
                 loop={true}
                 slidesPerView={1}
                 centerInsufficientSlides = {true}
                 onSlideChange={() => console.log('slide change')}
                 onSwiper={(swiper) => console.log(swiper)}
                 className="w-[700px] h-[250px]"
                 >
                     <SwiperSlide className='hover:shadow-2xl flex items-center justify-center'>
                        <div className='relative h-24 w-40 md:h-52 md:w-80 ml-5'>
                            <Image src={SightOneImg} 
                                layout='fill' 
                                objectFit='cover'
                                className='rounded-2xl'/>
                        </div>
                        <div className=''>
                            <p className='text-lg pb-5 p-5'>{SightOne}</p>
                            <p className='text-sm  text-gray-500 pl-5 pr-5 w-[450px]'>{DesSightOne}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='hover:shadow-2xl flex items-center justify-center'>
                        <div className='relative h-24 w-40 md:h-52 md:w-80 ml-5'>
                            <Image src={SightTwoImg} 
                                layout='fill' 
                                objectFit='cover'
                                className='rounded-2xl'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-lg pb-5 p-5'>{SightTwo}</p>
                            <p className='text-sm  text-gray-500 pl-5 pr-5 w-[450px]'>{DesSightTwo}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='hover:shadow-2xl flex items-center justify-center'>
                        <div className='relative h-24 w-40 md:h-52 md:w-80 ml-5'>
                            <Image src={SightThreeImg} 
                                layout='fill' 
                                objectFit='cover'
                                className='rounded-2xl'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-lg pb-5 p-5'>{SightThree}</p>
                            <p className='text-sm  text-gray-500 pl-5 pr-5 w-[450px]'>{DesSightThree}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='hover:shadow-2xl flex items-center justify-center'>
                        <div className='relative h-24 w-40 md:h-52 md:w-80 ml-5'>
                            <Image src={SightFourImg} 
                                layout='fill' 
                                objectFit='cover'
                                className='rounded-2xl'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-lg pb-5 p-5'>{SightFour}</p>
                            <p className='text-sm  text-gray-500 pl-5 pr-5 w-[450px]'>{DesSightFour}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='hover:shadow-2xl flex items-center justify-center'>
                        <div className='relative h-24 w-40 md:h-52 md:w-80 ml-5'>
                            <Image src={SightFiveImg} 
                                layout='fill' 
                                objectFit='cover'
                                className='rounded-2xl'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-lg pb-5 p-5'>{SightFive}</p>
                            <p className='text-sm  text-gray-500 pl-5 pr-5 w-[450px]'>{DesSightFive}</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                 </div>
                 <button className='button text-white hover:shadow-2xl hover:shadow-blue-800 bg-blue-400 focus:bg-gray-400' onClick={()=>{setCitypick(citypick.replace(`${citypick}`,`${city}`))}}>Выбрать</button>
             </div>
         ))}
    </div>
    </div>
  )
}

export default cities

export async function getStaticProps() {
    const citieseData = await fetch("https://api.jsonbin.io/b/6282557238be29676107af7a/10").
    then(
      (res) => res.json()
      );
      return{
        props:{
            citieseData,
        },
      };
  }
  