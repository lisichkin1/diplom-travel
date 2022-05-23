import React,{ useState } from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { prototype } from 'events'

function tours({ResaultSearch}) {
    const router = useRouter();
    const city = router.query
    const [count, setCount] = useState(1);
    const [count2, setCount2] = useState(3);
    const [count3, setCount3] = useState(15000);
    const [selectCity, setSelectCity] = useState("Москва");
    const [changePriceTicket, setchangePriceTicket] = useState(0);

    let ResaultSearchTest = ResaultSearch.slice();
    const [data, setData] = useState(ResaultSearchTest);
    const filterResult = (pepple, day, sum, cityCount) =>{
        const resultFilter = ResaultSearchTest.filter((curData)=>{
            
        const priceTicketFilter = curData.cities.map(({name, priceTicket})=>(
                name === cityCount ? priceTicket : false
            ))
        const priceTicketFilterCount = priceTicketFilter.filter(Boolean)
        console.log(priceTicketFilter);    
        console.log(priceTicketFilterCount[0]);
          return curData.people === pepple && sum >= curData.price * day + priceTicketFilterCount[0];
        });
        setData(resultFilter)
      }
    
    //console.log(ResaultSearch[0].cities[0].name);
    //console.log(changePriceTicket);
    const filterTourArr = data.filter(function (el) {
        return el.location == city.city
      })
    return (
    <div>
        <Header placeholder=''/>
        <div className='flex items-center justify-center flex-col h-[200px]'>
        <p className='text-gray-500 text-base'>Выберите ваш город, для расчёта стоимости проживания и поездки</p>
            <div className='flex items-center justify-center flex-col'>
                <div className='flex flex-wrap'>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>{setSelectCity('Москва'); filterResult(count,count2, count3, selectCity)}}>Москва</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>{setSelectCity('Краснодар'); filterResult(count,count2, count3, selectCity)}}>Краснодар</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>setSelectCity('Санкт-Петербург')}>Санкт-Петербург</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>setSelectCity('Екатеринбург')}>Екатеринбург</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>setSelectCity('Ростов-на-Дону')}>Ростов-на-Дону</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>setSelectCity('Уфа')}>Уфа</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>setSelectCity('Казань')}>Казань</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>setSelectCity('Челябинск')}>Челябинск</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>setSelectCity('Нижний Новгород')}>Нижний Новгород</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>setSelectCity('Самара')}>Самара</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>setSelectCity('Махачкала')}>Махачкала</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>setSelectCity('Красноярск')}>Красноярск</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>setSelectCity('Ставрополь')}>Ставрополь</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>setSelectCity('Новосибирск')}>Новосибирск</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>setSelectCity('Кемерово')}>Кемерово</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>setSelectCity('Пермь')}>Пермь</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>setSelectCity('Волгоград')}>Волгоград</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>setSelectCity('Саратов')}>Саратов</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>setSelectCity('Сочи')}>Сочи</button>
                    <button className='button border-none w-auto h-auto hover:text-blue-500' onClick={()=>setSelectCity('Калининград')}>Калининград</button>
                    
                </div>
                <div className='flex items-center justify-center flex-row'>
                    <div className='flex'>
                        <p>Ваш город: </p>
                        <p className='w-[150px] text-center text-blue-500'>{selectCity}</p>
                    </div>
                    <div className='flex flex-col items-center justify-center pl-6'>
                        <p className='text-sm text-gray-500 pb-2 pt-5'>Выберите количество гостей</p>
                        <div className='flex items-center border-blue-400 border-2 rounded-lg'>
                            <button className='button px-3 py-1 rounded-lg border-2 bg-blue-400 text-white' onClick={()=>setCount(count-1)}>-</button>
                            <div className=''>
                                <p className='text-base text-gray-500 px-5'>{count}</p>
                            </div>
                            <button className='button px-3 py-1 rounded-lg border-2 bg-blue-400 text-white'onClick={()=>setCount(count+1)}>+</button>
                            
                            
                        </div>
                    </div>
                    
                    <div className='flex flex-col items-center justify-center pl-6'>
                        <p className='text-sm text-gray-500 pb-2 pt-5'>Выберите количество дней поездки</p>
                        <div className='flex items-center border-blue-400 border-2 rounded-lg'>
                            <button className='button px-3 py-1 rounded-lg border-2 bg-blue-400 text-white' onClick={()=>setCount2(count2-1)}>-</button>
                            <div className=''>
                                <p className='text-base text-gray-500 px-5'>{count2}</p>
                            </div>
                            <button className='button px-3 py-1 rounded-lg border-2 bg-blue-400 text-white'onClick={()=>setCount2(count2+1)}>+</button>
                        </div>
                    </div>
                    
                    
                    <div className='flex flex-col items-center justify-center pl-6'>
                        <p className='text-sm text-gray-500 pb-2 pt-5'>Выберите ваш бюджет</p>
                        <div className='flex items-center border-blue-400 border-2 rounded-lg'>
                            <button className='button px-3 py-1 rounded-lg border-2 bg-blue-400 text-white' onClick={()=>setCount3(count3-5000)}>-</button>
                            <div className=''>
                                <p className='text-base text-gray-500 px-5 w-[100px] text-center'>{count3}</p>
                            </div>
                            <button className='button px-3 py-1 rounded-lg border-2 bg-blue-400 text-white'onClick={()=>setCount3(count3+5000)}>+</button>
                        </div>
                    </div>
                    <div className='pl-6'>
                        <button className='button bg-blue-400 text-white' onClick={()=> filterResult(count,count2, count3, selectCity)}>Поиск</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-wrap items-center justify-center'>
        {data.map(({img, location, title, map, passage, link, Tickets, TicketsAir, TikcetsAirLink, 
         TicketsTrain, TikcetsTrainLink, description, star, price, total, cities}) =>(
            <div className='flex flex-col py-7 px-2 border-b
             hover:shadow-2xl pr-4 duration-200
             ease-out border w-[800px] m-5'>
                <div className='flex justify-center flex-row '>
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
                            <HeartIcon className='h-7 cursor-pointer'/>
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
                <div className=' justify-start items-start flex-col'>
                    
                        <div className='flex justify-strat items-start flex-col gap-x-1'>
                            <p className='text-sm text-gray-500 pb-3 pt-3 pl-3 text-center'>{Tickets}</p>
                            {cities.map(({name, priceTicket})=>(
                                <p>{name === selectCity ? priceTicket : false}</p>
                            ))}
                            
                            <div className='flex'>
                                <button className='button m-1'>
                                    <a href={TikcetsAirLink} target="_blank">
                                        {TicketsAir}
                                    </a>
                                </button>
                                <button className='button m-1'>
                                    <a href={TikcetsTrainLink} target="_blank">
                                        {TicketsTrain}
                                    </a>
                                </button>
                            </div>  
                        </div>
                    
                </div>
            </div>
          ))}
        </div>
        
    </div>
  )
}

export default tours

export async function getServerSideProps(){
    const ResaultSearch = await fetch("https://api.jsonbin.io/b/626fa69838be296761fb0f99/18")
    .then((res) => res.json());
    
    return{
      props:{
        ResaultSearch,
      },
    };
  }