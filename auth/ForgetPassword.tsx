import React from 'react'
import {Input} from "@heroui/input";
import { IoChevronBackOutline } from "react-icons/io5";


function ForgetPassword() {
  return (
    <div className='container bg-orange-500 lg:max-w-1/2 mx-auto'>
      <div className=' w-full h-svh bg-orange-500'>
        <div className='h-[30%] bg-orange-500'>
            <div className='px-5 py-5'>
              <span className='w-[50px] h-[50px] p-2 rounded-full bg-white text-black text-2xl flex justify-center items-center'><IoChevronBackOutline /></span>
            </div>
            <div className='text-center py-3'>
              <h1 className='Inter-bold text-4xl text-white'>Forget Password</h1>
              <p className='text-[18px] text-neutral-100 px-5'>We have sent a code reset password code in your email</p>
            </div>
        </div>
        <div className='w-full h-[70%] bg-zinc-100 rounded-t-[3rem] py-16 px-6'>
          <form className='space-y-6'>
            <div className=''>
              {/* <label>EMAIL</label> */}
              <Input className='' radius={'md'} size='lg' labelPlacement="outside-top" placeholder='hellocodedev404@example.com' variant='faded'  label="Email" type="email" />
            </div>

            <div>
              <button className='w-full py-5 rounded-2xl text-white Inter-bold bg-gradient-to-r from-[#e9a920ff] to-[hsla(1,92%,47%,1)]'>Send Code</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword