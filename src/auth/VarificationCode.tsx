import React from 'react'
import {InputOtp} from "@heroui/input-otp";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
function VarificationCode() {
  const navigate = useNavigate()
  return (
<div className='container bg-orange-500 lg:max-w-1/2 mx-auto'>
      <div className=' w-full h-svh bg-orange-500'>
        <div className='h-[30%] bg-orange-500'>
            <div className='px-5 py-5'>
              <span className='w-[50px] h-[50px] p-2 rounded-full bg-white hover:bg-gray-100 duration-300 text-black text-2xl flex justify-center items-center'
                onClick={() => navigate(-1)}
              ><IoChevronBackOutline /></span>
            </div>
            <div className='text-center py-3'>
              <h1 className='Inter-bold text-4xl text-white'>Varification</h1>
              <p className='text-[18px] text-neutral-100'>We have sent a code in your email</p>
              <p className='text-center text-sm text-neutral-300'>hellocodedv404@example.com</p>
            </div>
        </div>
        <div className='w-full h-[70%] bg-zinc-100 rounded-t-[3rem] py-16 px-6'>
          <form className='space-y-6'>
            
            <div className='flex justify-center'>
              <div className='mx-auto text-center'>
                <div className='flex justify-between px-1 py-1'>
                  <span className='text-sm'>CODE</span>
                  <p className='text-sm text-orange-600'>Resend CODE</p>
                </div>
                <InputOtp length={6} size={'lg'} variant='bordered' />
              </div>
            </div>
            <div>
              <button className='w-full py-5 rounded-2xl text-white Inter-bold bg-gradient-to-r from-[#e9a920ff] to-[hsla(1,92%,47%,1)]'>Varify</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default VarificationCode