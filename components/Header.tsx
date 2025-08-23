import React from 'react'
import { CgMenuLeft } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
function Header() {
  return (
    <div className='mx-auto'>
        <div className='flex justify-between mx-auto'>
            <div className='w-[50px] h-[50px] rounded-full p-3 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center items-center text-3xl'>
                <span><CgMenuLeft /></span>
            </div>
            <div className='w-[200px] h-[56px] rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-center'>
                <h1 className='text-md pt-2 Inter-bold text-orange-500'>DELIVER TO Hilal</h1>
                <p className='text-sm text-neutral-400'>to lolab kalaroos</p>
            </div>
            <div className='relative w-[50px] h-[50px] bg-neutral-950 text-white rounded-full p-3 flex justify-center items-center text-3xl'>
                <span className=''><TiShoppingCart /></span>
                <span className='absolute w-[18px] h-[18px] flex items-center justify-center bg-orange-500 p-1 rounded-full text-[10px] right-2 top-2'>2</span>
            </div>
        </div>
    </div>
  )
}

export default Header