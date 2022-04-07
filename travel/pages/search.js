import React from 'react'
import Header from '../components/Header'
import { useRouter } from 'next/router';
import {format} from 'date-fns' 
import { formatDistance } from 'date-fns'
// Require Esperanto locale
import { ru } from 'date-fns/locale'
import InfoCard from '../components/InfoCard';
function Search({ResaultSearch}) {
  const router = useRouter();
  console.log(ResaultSearch)
  
  const{location, startDate, endDate, quantityOfGuest} = router.query
  const normalizeStartDate = format(new Date(startDate), 'dd MMMM yy', {locale: ru});
  const normalizeEndDate = format(new Date(endDate), 'dd MMMM yy', {locale: ru});
  const range = `${normalizeStartDate} - ${normalizeEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${quantityOfGuest} гостей`}/>
      <main className='flex'>
        <sectionc className='flex-grow pt-16 px-6'>
          <p className='text-sm'>30 вариантов мест - {range} для {quantityOfGuest} гостя(ей)</p>
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

          <div className='flex flex-col'>
          {ResaultSearch.map(({img, location, title, description, star, price, total}) =>(
            <InfoCard
            key={img}
            img={img}
            location={location}
            title={title}
            description={description}
            star={star}
            price={price}
            total={total}
            />
          ))}
          </div>
        </sectionc>
      </main>
    </div>
  )
}

export default Search

export async function getServerSideProps(){
  const ResaultSearch = await fetch("https://api.jsonbin.io/b/624f049c7b69e806cf4a3333")
  .then((res) => res.json());
  
  return{
    props:{
      ResaultSearch,
    },
  };
}