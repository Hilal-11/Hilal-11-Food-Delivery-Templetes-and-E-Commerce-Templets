import React from 'react'
import { motion } from 'motion/react'
function RadiusEffect() {
  return (
            <div className='absolute top-0 right-0 flex justify-center items-center'>
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ delay: 1, duration: 2.5, }}
             className='absolute w-[200px] h-[200px] rounded-full border-[2px] border-orange-400'></motion.span>
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 2, }}
             className='absolute w-[150px] h-[150px] rounded-full border-[2px] border-orange-400'></motion.span>
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 2, }}
             className='absolute w-[150px] h-[150px] rounded-full border-[2px] border-orange-400'></motion.span>
             <motion.span initial={{opacity: 0 }}animate={{ opacity: 1 }}transition={{ delay: 1, duration: 1.5, }}
             className='absolute w-[100px] h-[100px] rounded-full border-[2px] border-orange-400'></motion.span>
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1, }}
             className='absolute w-[50px] h-[50px] rounded-full border-[2px] border-orange-400'></motion.span>
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5, }}
             className='absolute w-[20px] h-[20px] rounded-full border-[2px] border-orange-400'></motion.span>
        </div>
  )
}

export default RadiusEffect