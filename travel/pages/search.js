import React from 'react'
import Header from '../components/Header'
import { useRouter } from 'next/router';
import {format} from 'date-fns' 

function Search() {
  const router = useRouter();
  
  const{location, startDate, endDate, quantityOfGuest} = router.query
  const normalizeStartDate = format(new Date(startDate), 'dd MMMM yy')
  const normalizeEndDate = format(new Date(endDate), 'dd MMMM yy')

  return (
    <div>
      <Header/>
      <main className='flex'>
        <sectionc className='flex-grow pt-16 px-6'>
          <p className='text-sm'>30 вариантов для {quantityOfGuest} гостей 
          c {normalizeStartDate} по {normalizeEndDate}</p>
          <h1 className='text-2xl font-semibold mt-2 mb-6'>
            Жильё {location}
          </h1>
          <div className='hidden lg:inline-flex mb-5 
          space-x-3 text-gray-600 whitespace-nowrap'>
            <p className='button'>Цена</p>
            <p className='button'>Тип жилья</p>
            <p className='button'>Бесплатная парковка</p>
            <p className='button'>Джакузи</p>
            <p className='button'>Бассейн</p>
            <p className='button'>Камин</p>
            <p className='button'>Wi-Fi</p>
          </div>
        </sectionc>
      </main>
    </div>
  )
}

export default Search