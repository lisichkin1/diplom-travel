import React,{useState} from 'react'
import Header from '../components/Header'
import { useRouter } from 'next/router';
import {format} from 'date-fns' 
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import { formatDistance } from 'date-fns'
// Require Esperanto locale
import { ru } from 'date-fns/locale'
import InfoCard from '../components/InfoCard';
import Mapweb from '../components/Mapweb';
import Modal from '../components/Modal';

function Search({ResaultSearch}) {
  const router = useRouter();
  const [countPrice, setCountPrice] = useState(0);
  const [countParking, setcountParking] = useState('Платная');
  const [countWiFi, setcountWiFi] = useState('Платный');
  const [countBeauty , setcountBeauty] = useState('Нет');
  const [countBrecfact , setcountBrecfact] = useState('Есть');
  const [countLaundry , setcountLaundry] = useState('Есть');
  let ResaultSearchTest = ResaultSearch.slice();

  console.log(ResaultSearchTest[1])
  const [data, setData] = useState(ResaultSearchTest)
  const{location, startDate, endDate, quantityOfGuest} = router.query
  const normalizeStartDate = format(new Date(startDate), 'dd MMMM yy', {locale: ru});
  const normalizeEndDate = format(new Date(endDate), 'dd MMMM yy', {locale: ru});
  
  const range = `${normalizeStartDate} - ${normalizeEndDate}`;
  const [modalActive, setModalActive] = useState(false)
  const filterResult = (catItem) =>{
    const resultFilter = ResaultSearch.filter((curData)=>{
      return curData.star === catItem;
    });
    setData(resultFilter)
  }
  const filterResult2 = (catItem) =>{
    const result2 = resultFilter.filter((curData)=>{
      return curData.parking === catItem;
    });
    setData(result2)
  }
  const filterArr = data.filter(function (el) {
    return el.location == location
  })

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${quantityOfGuest} гостей`}/>
      <main className='flex'>
        <sectionc className='flex-grow pt-16 px-6'>
          <p className='text-sm'>30 вариантов мест - {range} для {quantityOfGuest} гостя(ей)</p>
          <h1 className='text-2xl font-semibold mt-2 mb-6'>
            Жильё {location}
          </h1>
          <div className='flex lg:inline-flex mb-5 
          space-x-3 text-gray-600 whitespace-nowrap flex-wrap'>
            <div className='flex items-center justify-center flex-col m-2'>
                <p className='text-blue-400 font-semibold'>Цена</p>
                <div className='flex items-center justify-center'>
                    <button className='button text-blue-400 text-base font-bold' onClick={()=>setCountPrice(countPrice-5000)}>-</button>
                    <div className='w-[80px] items-center justify-center'>
                        <p className='text-base text-gray-500 text-center'>{countPrice}</p>
                    </div>
                    <button className='button text-blue-400 text-base font-bold'onClick={()=>setCountPrice(countPrice+5000)}>+</button>   
              </div>
            </div>
            <div className='flex items-center justify-center flex-col m-2'>
              <p className='text-blue-400 font-semibold'>Парковка</p>
              <div className='flex items-center justify-center '>
                    <button className='button text-blue-400 text-base w-[138px]' onClick={()=>setcountParking(countParking.replace(/Бесплатная/, 'Платная'))}>Платная</button>
                    <div className='w-[120px] items-center justify-center'>
                      <p className='text-base text-gray-500 text-center'>{countParking}</p>
                    </div>
                    <button className='button text-blue-400 text-base w-[138px]'onClick={()=>setcountParking(countParking.replace(/Платная/, 'Бесплатная'))}>Бесплатная</button>   
              </div>
            </div>
            <div className='flex items-center justify-center flex-col m-2'>
              <p className='text-blue-400 font-semibold'>Wi-Fi</p>
              <div className='flex items-center justify-center '>
                    <button className='button text-blue-400 text-base w-[138px]' onClick={()=>setcountWiFi(countWiFi.replace(/Бесплатный/, 'Платный'))}>Платный</button>
                    <div className='w-[120px] items-center justify-center'>
                      <p className='text-base text-gray-500 text-center'>{countWiFi}</p>
                    </div>
                    <button className='button text-blue-400 text-base w-[138px]'onClick={()=>setcountWiFi(countWiFi.replace(/Платный/, 'Бесплатный'))}>Бесплатный</button>   
              </div>
            </div>
            <div className='flex items-center justify-center flex-col m-2'>
              <p className='text-blue-400 font-semibold'>Салон красоты</p>
              <div className='flex items-center justify-center '>
                    <button className='button text-blue-400 text-base' onClick={()=>setcountBeauty(countBeauty.replace(/Нет/, 'Есть'))}>Есть</button>
                    <div className='w-[120px] items-center justify-center'>
                      <p className='text-base text-gray-500 text-center'>{countBeauty}</p>
                    </div>
                    <button className='button text-blue-400 text-base'onClick={()=>setcountBeauty(countBeauty.replace(/Есть/, 'Нет'))}>Нет</button>   
              </div>
            </div>
            <div className='flex items-center justify-center flex-col m-2'>
              <p className='text-blue-400 font-semibold'>Завтрак в номер</p>
              <div className='flex items-center justify-center '>
                    <button className='button text-blue-400 text-base' onClick={()=>setcountBrecfact(countBrecfact.replace(/Нет/, 'Есть'))}>Есть</button>
                    <div className='w-[120px] items-center justify-center'>
                      <p className='text-base text-gray-500 text-center'>{countBrecfact}</p>
                    </div>
                    <button className='button text-blue-400 text-base'onClick={()=>setcountBrecfact(countBrecfact.replace(/Есть/, 'Нет'))}>Нет</button>   
              </div>
            </div>
            <div className='flex items-center justify-center flex-col m-2'>
              <p className='text-blue-400 font-semibold'>Прачечная</p>
              <div className='flex items-center justify-center '>
                    <button className='button text-blue-400 text-base' onClick={()=>setcountLaundry(countLaundry.replace(/Нет/, 'Есть'))}>Есть</button>
                    <div className='w-[120px] items-center justify-center'>
                      <p className='text-base text-gray-500 text-center'>{countLaundry}</p>
                    </div>
                    <button className='button text-blue-400 text-base'onClick={()=>setcountLaundry(countLaundry.replace(/Есть/, 'Нет'))}>Нет</button>   
              </div>
            </div>
            
          </div>

          <div className='flex flex-col'>
          {filterArr.map(({img, location, title, map, passage, link, star, price}) =>(
            <div className='flex py-7 px-2 border-b cursor-pointer 
            hover:opacity-80 hover:shadow-lg pr-4 duration-200
             ease-out first:border-t'>
                <div className='relative h-24 w-40 md:h-52 md:w-80
                    flex-shrink-0 ml-5'>
                        <Image src={img} 
                        layout='fill' 
                        objectFit='cover'
                        className='rounded-2xl'
                        />
                    </div>
                    <div className='flex flex-col flex-grow pl-5'>
                        <div className='flex justify-between'>
                            <p>{location}</p>
                            <div className='flex justify-center items-center'>
                            <p className='mr-2 text-blue-500 font-semibold'>{star}</p>
                            <HeartIcon className='h-7 cursor-pointer'/>
                            </div>
                            
                        </div>
            
                        <h4 className='text-xl'>{title}</h4>
                        <p className='text-xs text-gray-500 pb-5 pt-5'>Местоположение : {map}</p>
                        <p className='text-xs text-gray-500'>Транспорт : {passage}</p>
                        <div className='flex justify-between items-end pt-5'>
                            <button className='button'>
                                <a href={link} target="_blank">
                                    Забронировать номер
                                </a>
                            </button>
                            <div>
                                <p className='text-lg lg:text-2xl font-normal'>{price}</p>
                                <p className='text-base font-normal'>ночь</p>
                            </div>
                        </div>
                </div>
            </div>
          ))}
          </div>
        </sectionc>
        <section className='hidden xl:inline-flex xl:min-w-[600px] h-[1000px] sticky top-[10%] left-[100%]'>
          <Mapweb filterArr={filterArr} input={location}/>
        </section>
      </main>
    </div>
  )
}

export default Search

export async function getServerSideProps(){
  const ResaultSearch = await fetch("https://api.jsonbin.io/b/626fa69838be296761fb0f99/15")
  .then((res) => res.json());
  
  return{
    props:{
      ResaultSearch,
    },
  };
}