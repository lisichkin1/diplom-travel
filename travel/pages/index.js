
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Banner from "../components/Banner"
import SliderCard from"../components/SliderCard"
import SityCard from"../components/SityCard"

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Home({exploreData, sliderData}){
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
      <h2 className='text-2xl sm:text-4xl text-black 
      font-semibold pb-6'>
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

      
      <section>
        <h2 className=' text-2xl sm:text-4xl text-black 
        font-semibold py-6'>Живите где угодно</h2>
        
        <div className='flex space-x-5 overflow-scroll'> 
        {sliderData?.map(({img, title}) =>(
          <SliderCard
          key = {img}
          img = {img}
          title = {title}
          />
        ))}
        
        </div>
      </section>
    </main>
    </div>
  )
}


export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/IG4Q").
  then(
    (res) => res.json()
    );
  
  const sliderData = await fetch("https://jsonkeeper.com/b/G0PD").
  then(
    (res) => res.json()
     );
    return{
      props:{
        exploreData,
        sliderData,
      },
    };
}