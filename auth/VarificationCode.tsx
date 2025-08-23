import React from 'react'
import {InputOtp} from "@heroui/input-otp";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react'
import RadiusEffect from '@/components/RadiusEffect';
function VarificationCode() {
  const navigate = useNavigate()
  return (
    <div className='container bg-orange-500 mx-auto'>
      <div className='border-slate-950 lg:flex lg:items-center lg:justify-center lg:h-svh'>

        <div className='w-full lg:w-1/2 flex items-center justify-center'>
          <div className=' w-full h-svh lg:h-auto bg-orange-500 lg:max-w-md'>
        <div className='h-[30%] bg-orange-500'>
            <div className='px-5 py-5 relative'>
              <span className='shadow-md shadow-orange-700 w-[50px] h-[50px] lg:absolute -left-14 -top-6 p-2 rounded-full bg-white hover:bg-gray-100 duration-300 text-black text-2xl flex justify-center items-center'
                onClick={() => navigate(-1)}
              ><IoChevronBackOutline /></span>
            </div>
            <div className='lg:hidden text-center py-3'>
              <h1 className='Inter-bold text-4xl text-white'>Varification</h1>
              <p className='text-[18px] text-neutral-100'>We have sent a code in your email</p>
              <p className='text-center text-sm text-neutral-300'>hellocodedv404@example.com</p>
            </div>
        </div>
        <div className='relative w-full h-[70%] bg-zinc-100 lg:rounded-[2rem] rounded-t-[3rem] py-6 px-6 shadow-md shadow-orange-800 overflow-hidden'>
          <RadiusEffect />
          <div className='hidden lg:block text-center py-0'>
              <h1 className='Inter-bold text-3xl text-black'>Varification</h1>
              <p className='text-[15px] text-neutral-800'>We have sent a code in your email</p>
            </div>
          <form className='py-10 space-y-8'>      
          <div className='flex justify-center'>
              <div className='mx-auto text-center'>
                <div className='flex justify-between px-1 py-1'>
                  <span className='text-sm'>Code</span>
                  <p className='text-sm text-orange-600 underline cursor-pointer'>Resend code</p>
                </div>
                <InputOtp length={6} size={'lg'} variant='bordered' />
              </div>
            </div>
            <div>
              <button className='w-full py-5 rounded-2xl text-white Inter-bold bg-gradient-to-r from-[#e9a920ff] to-[hsla(1,92%,47%,1)] shadow-md shadow-orange-700'>Varify</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default VarificationCode



