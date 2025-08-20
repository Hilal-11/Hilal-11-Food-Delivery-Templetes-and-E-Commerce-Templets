import React from 'react'
import { useNavigate } from 'react-router-dom'
import Skip from '@/components/Skip'
import { motion } from 'motion/react'
function SecondScreen() {
    const navigate = useNavigate()
  return (
    <div className='container h-svh w-svw  px-2 mx-auto overflow-hidden relative '>

    <div className='absolute top-0 left-0 flex justify-center items-center'>
             <span className='absolute w-[400px] h-[400px] rounded-full border-[2px] border-orange-400'></span>
             <span className='absolute w-[350px] h-[350px] rounded-full border-[2px] border-orange-400'></span>
             <span className='absolute w-[300px] h-[300px] rounded-full border-[2px] border-orange-400'></span>
             <span className='absolute w-[250px] h-[250px] rounded-full border-[2px] border-orange-400'></span>
             <span className='absolute w-[200px] h-[200px] rounded-full border-[2px] border-orange-400'></span>
             <span className='absolute w-[150px] h-[150px] rounded-full border-[2px] border-orange-400'></span>
             <span className='absolute w-[100px] h-[100px] rounded-full border-[2px] border-orange-400'></span>
             <span className='absolute w-[50px] h-[50px] rounded-full border-[2px] border-orange-400'></span>
             <span className='absolute w-[20px] h-[20px] rounded-full border-[2px] border-orange-400'></span>
    </div>

    <div className='absolute top-0 right-0 flex justify-center items-center'>
             <span className='absolute w-[200px] h-[200px] rounded-full border-[2px] border-orange-400'></span>
             <span className='absolute w-[150px] h-[150px] rounded-full border-[2px] border-orange-400'></span>
             <span className='absolute w-[100px] h-[100px] rounded-full border-[2px] border-orange-400'></span>
             <span className='absolute w-[50px] h-[50px] rounded-full border-[2px] border-orange-400'></span>
             <span className='absolute w-[20px] h-[20px] rounded-full border-[2px] border-orange-400'></span>
    </div>
        
        <div className=' relative lg:inset-0 top-[25%]'>
            <motion.img
            initial={{
                    opacity: 0,
                    x: -100,
                    scale: 0.98

                }}
                animate={{
                    opacity: 1,
                    x: 1,
                    scale: 1,

                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: 0.4,
                }}  className=' lg:w-[550px] w-[600px] mx-auto fill-white drop-shadow-xl/50' src="https://png.pngtree.com/png-clipart/20250423/original/pngtree-smiling-delivery-boy-on-orange-moped-with-paper-bag-png-image_20836006.png" alt="OOPS Error" />
        </div>

        <div className='flex justify-center items-end absolute inset-0 bottom-5 w-full px-2'>
            <div className='grid-cols-1 gap-2 w-full text-center '>
                <button className='lg:w-[400px] cursor-pointer w-full py-5 rounded-xl       bg-gradient-to-r from-[#e9a920ff] to-[hsla(1,92%,47%,1)] text-white Inter-bold'
                    onClick={() => navigate('/getStart')}
                >NEXT</button> <br />
                <button className='lg:w-[400px] cursor-pointer w-full pt-4 pb-2 rounded-xl  Inter-medium text-lg'
                    onClick={() => navigate('/getStart')}
            >Skip</button>
            </div>
        </div>
    </div>
  )
}

export default SecondScreen