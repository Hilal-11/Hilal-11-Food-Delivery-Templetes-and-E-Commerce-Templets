import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
function StartAppScreen() {
    const navigate = useNavigate()
  return (
    <div className='container h-svh w-svw  px-2 mx-auto overflow-hidden relative '>

        <div className='absolute top-0 left-0 flex justify-center items-center'>
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ delay: 4.5 , duration: 4.5, }}  className='absolute w-[400px] h-[400px] rounded-full border-[2px] border-orange-400'></motion.span>
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ delay: 4,  duration: 4, }}  className='absolute w-[350px] h-[350px] rounded-full border-[2px] border-orange-400'></motion.span>
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ delay: 3.5 , duration: 3.5, }}  className='absolute w-[300px] h-[300px] rounded-full border-[2px] border-orange-400'></motion.span>
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ delay: 3, duration: 3, }}  className='absolute w-[250px] h-[250px] rounded-full border-[2px] border-orange-400'></motion.span>
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ delay: 2.5 , duration: 2.5, }}  className='absolute w-[200px] h-[200px] rounded-full border-[2px] border-orange-400'></motion.span>
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ delay: 2, duration: 2, }}  className='absolute w-[150px] h-[150px] rounded-full border-[2px] border-orange-400'></motion.span>
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ delay: 1.5 , duration: 1.5, }}  className='absolute w-[100px] h-[100px] rounded-full border-[2px] border-orange-400'></motion.span>
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ delay: 1, duration: 1, }}  className='absolute w-[50px] h-[50px] rounded-full border-[2px] border-orange-400'></motion.span>
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ delay: 0.5 , duration: 0.5, }}  className='absolute w-[20px] h-[20px] rounded-full border-[2px] border-orange-400'></motion.span>
        </div>

        <div className='absolute top-0 right-0 flex justify-center items-center'>
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ delay: 1, duration: 2.5, }}
             className='absolute w-[200px] h-[200px] rounded-full border-[2px] border-orange-400'></motion.span>
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 2, }}
             className='absolute w-[150px] h-[150px] rounded-full border-[2px] border-orange-400'></motion.span>
             <motion.span initial={{opacity: 0 }}animate={{ opacity: 1 }}transition={{ delay: 1, duration: 1.5, }}
             className='absolute w-[100px] h-[100px] rounded-full border-[2px] border-orange-400'></motion.span>
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1, }}
             className='absolute w-[50px] h-[50px] rounded-full border-[2px] border-orange-400'></motion.span>
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5, }}
             className='absolute w-[20px] h-[20px] rounded-full border-[2px] border-orange-400'></motion.span>
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
                    delay: 1,
                }}
            className=' lg:w-[550px] w-[600px] mx-auto fill-white drop-shadow-xl/50' src="https://png.pngtree.com/png-clipart/20250423/original/pngtree-smiling-delivery-boy-on-orange-moped-with-paper-bag-png-image_20836006.png" alt="OOPS Error" />
        </div>

        <div className='flex justify-center items-end absolute inset-0 bottom-5 w-full px-2'>
            <motion.button
                initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.98,

                }}
                animate={{
                    opacity: 1,
                    y: 1,
                    scale: 1,


                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: 1,
                }}
            className='lg:w-[400px] cursor-pointer w-full py-5 rounded-xl bg-gradient-to-r from-[#e9a920ff] to-[hsla(1,92%,47%,1)] text-white Inter-bold'
                onClick={() => navigate('/introduce')}
            >Next</motion.button>
        </div>
        
    </div>
  )
}

export default StartAppScreen