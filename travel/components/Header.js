import React, { useState } from 'react'
import Image from 'next/image';
import logoPic from '../image/travel.png'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UserIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import * as rdrLocales from 'react-date-range/dist/locale';
import moment from 'moment';
import { useRouter } from 'next/router';



function Header({placeholder}) {
  const [searchInput, setSerachInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [quantityOfGuest, setQuantityOfGuest] = useState(1);
  const router = useRouter();

  //console.log(searchInput)
  
  const dateSelect = (ranges) =>{
    setStartDate(ranges.Selection.startDate);
    setEndDate(ranges.Selection.endDate);
  }
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'Selection'
  }

  const search =()=>{
    router.push({
      pathname:'/search',
      query:{
        location:searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        quantityOfGuest,
      }
    })
  }

  const resetSearch = () =>{
    setSerachInput("");
  };
  //moment.locale('ru');
  return (
    <header className='sticky top-0 z-50 
    grid grid-cols-3 
    bg-white shadow-md
     py-5 px-5 md:px-10'>
      {/* left */}
      <div onClick={() => router.push('/')} className='relative flex items-center h-12 cursor-pointer my-auto'>
      <Image src={logoPic} 
      width='80'
      height='80' 
      objectFit="contain"
      objectPosition="left"
      />
      </div>
      {/* middle */}
      <div className='flex 
      items-center md:border-2 
      rounded-full py-2
      md:shadow-md'>
        <input 
        value={searchInput}
        onChange={(e)=> setSerachInput(e.target.value)}
        className='mm:pl-5 flex-grow 
        bg-transparent outline-none
        text-base text-gray-600 placeholder-gray-400' 
        type="text" 
        placeholder={placeholder || 'Начни свой поиск...'}/>
        <SearchIcon className='h-8 bg-blue-400 text-white 
        p-2 rounded-full cursor-pointer hidden md:inline-flex md:mx-3'/>
      </div>

      {/* right */}

      <div>
        <div className='flex items-center space-x-4 
          justify-end text-gray-600'>
          <p className='hidden md:inline text-center'>Станьте хозяином</p>
          <GlobeAltIcon className='hidden mm:inline h-6 cursor-pointer'/>
          <div className='flex items-center space-x-2 
          border-2 rounded-full p-2'>
          <MenuIcon className='h-6 cursor-pointer'/>
          <UserCircleIcon className='h-6 cursor-pointer'/>
        </div>
      </div>
      </div>
      {searchInput &&
      (
        <div className='flex flex-col col-span-3 mx-auto pt-4'>
          <DateRange
          locale = {rdrLocales.ru}
          ranges = {[selectionRange]}
          minDate = {new Date()}
          onChange={dateSelect}
          
          />
          <div className='flex items-center border-b-2 border-blue-400 mb-4'>
            <h2 className='text-xl flex-grow font-semibold text-gray-600'>
              Количество гостей
            </h2>
            <UserIcon className='h-5'/>
            <input 
            type='number' 
            className='w-12 pl-2 text-lg 
            outline-none text-blue-500'
            value={quantityOfGuest}
            onChange={(e) => setQuantityOfGuest(e.target.value)}
            min={1}
            >
            </input>
          </div>
          <div className='flex'>
            <button onClick={resetSearch} className='flex-grow text-gray-600'>
              Отменить
            </button>
            <button onClick={search} className='flex-grow text-blue-400'>
              Искать
            </button>
          </div>
        </div>
      )
      }
    </header>
    
  );
}

export default Header