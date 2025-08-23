import React from 'react'
import Header from '@/components/Header'
import { IoIosSearch } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import {foodItemsData}  from '@/config/horizentalFoodItems'
function Home() {
  return (
    <div className='container px-2 py-4 mx-auto'>
      <div className='mx-auto px-2'>
        <Header />
      </div>
      <div className=''>
        <div className='px-4 pt-5'><p className='text-md text-neutral-700'>Hey Hilal <span className='Inter-bold text-orange-500'>Good morning</span></p></div>
        <div>
          <div className='relative w-full px-2 py-4'>
            <span className='absolute text-2xl top-9 left-4 text-neutral-400'><IoIosSearch /></span>
            <input className='pl-9 py-5 rounded-lg w-full px-4 bg-neutral-100 text-md outline-none' type="text" placeholder='Search dishes resturents ... '/>

          </div>
        
        <div className='w-full h-auto py-4 px-2 bg-white'>
          <div className='bg-white w-full overflow-x-auto scrollbar-thin scroll-smooth flex gap-2 py-2'>

            {
              foodItemsData.map((item) => (
                <div key={item.id} className='min-w-[160px] h-[60px] rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                  <div className='pl-2 flex items-center justify-between h-full'>
                    <img className='rounded-full w-[50px] h-[50px] object-cover' src={item.image} alt="" />
                    <p className='text-[17px] pr-10 Inter-bold'>{item.name}</p>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
        <div className='flex justify-between pb-2 px-3'>
          <div className='text-xl'>All Catagories</div>
          <div className='flex items-center text-orange-500'>See All<span className='text-2xl'><MdNavigateNext /></span></div>
        </div>
        <div className='grid grid-cols-2 gap-4 px-2'>
          <div className='col-span-2 rounded-lg  h-[180px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'></div>
          <div className='rounded-lg h-[180px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <img src={foodItemsData[0].image} alt="" />
          </div>
          <div className='rounded-lg h-[180px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <img src={foodItemsData[1].image} alt="" />

          </div>
          <div className='rounded-lg h-[180px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <img src={foodItemsData[2].image} alt="" />

          </div>
          <div className='rounded-lg h-[180px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <img src={foodItemsData[2].image} alt="" />

          </div>
          <div className='col-span-2 rounded-lg h-[180px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'></div>

        </div>

        </div>
      </div>
    </div>
  )
}

export default Home