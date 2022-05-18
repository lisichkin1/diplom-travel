import React from 'react'
import InfoCard from '../components/InfoCard';
import Image from 'next/image'
function Modal({active, setActive,img, location, title, description, star, price, total, id}) {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={()=> setActive(false)}>
        <div className='p-1 rounded-3xl bg-white h-[700px] w-[1600px]'
        onClick={e => e.stopPropagation()}>
            
        </div>
    </div>
  )
}

export default Modal