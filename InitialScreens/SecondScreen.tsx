import React from 'react'
import { useNavigate } from 'react-router-dom'
import Skip from '@/components/Skip'
import { motion } from 'motion/react'
import deliveryDishes from '@/assets/deliveryDishes.png'
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
        
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-center h-full pt-0 lg:pt-0 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -60, scale: 0.98 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
                        <motion.img
                            src={deliveryDishes}
                            alt="Delivery dishes"
                            className="w-auto lg:w-[550px] mx-auto drop-shadow-xl/50"
                        />
                    </motion.div>
            <br /> <br />
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                        className="w-full lg:w-1/2 px-2 mt-0 lg:mt-0 text-center lg:text-left flex flex-col items-center lg:items-start justify-center"
                    >
                        <h1 className='text-xl lg:text-3xl Inter-bold'>All of your favorites</h1>
                        <p className='px-2 text-sm lg:text-base text-neutral-700 max-w-xl mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In corporis sint corrupti, qui culpa quidem veniam numquam dolorumss.</p>

                        <div className="mt-6 w-full lg:w-auto flex flex-col gap-3 items-center lg:items-start">
                            {/* Large screens: show buttons here. Small screens keep the existing bottom absolute buttons (hidden on lg). */}
                            <div className=" lg:block w-full">
                                <button className='shadow-md shadow-orange-700 lg:w-[400px] cursor-pointer w-full py-5 rounded-xl bg-gradient-to-r from-[#e9a920ff] to-[hsla(1,92%,47%,1)] text-white Inter-bold'
                                        onClick={() => navigate('/getStart')}
                                >NEXT</button>
                                <button className='lg:w-[400px] cursor-pointer w-full pt-4 pb-2 rounded-xl Inter-medium text-lg mt-3'
                                        onClick={() => navigate('')}
                                >Skip</button>
                            </div>
                        </div>
                    </motion.div>
                </div>
    </div>
  )
}

export default SecondScreen