
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Banner from "../components/Banner"
import SityCard from"../components/SityCard"


export default function Home({exploreData}){
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>

      <Banner/>
    <main className='max-w-7xl mx-auto px-8 sm:px-16'>
      <section className='pt-6'>
      <h2 className='text-2xl sm:text-4xl text-black font-semibold pb-6'>
        Исследуйте популярные места
      </h2>
      {/* pull data from a server - API */}
      <div className='grid grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4'>
      {exploreData?.map(({img, location, distance})=>(
        <SityCard
        key={img}
        img={img}
        distance={distance}
        location={location}
        />
        ))}
      </div>
      </section>
    </main>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/ETML").
  then(
    (res) => res.json()
    );

    return{
      props:{
        exploreData,
      },
    };
}