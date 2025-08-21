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
        
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full pt-8 lg:pt-0 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -60, scale: 0.98 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
                        <motion.img
                            src="https://png.pngtree.com/png-clipart/20250423/original/pngtree-smiling-delivery-boy-on-orange-moped-with-paper-bag-png-image_20836006.png"
                            alt="Smiling delivery rider on orange moped"
                            className="w-82 sm:w-[500px] lg:w-[550px] mx-auto"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.9 }}
                        className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0 text-center lg:text-left"
                    >
                        <h1 className="text-2xl lg:text-4xl Inter-bold mb-4">Fast & Friendly Delivery</h1>
                        <p className="text-base lg:text-lg text-neutral-700 mb-6">Get your favorite items delivered quickly by our reliable riders. Track your order and enjoy fast checkout.</p>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="lg:w-[320px] w-full py-4 rounded-xl bg-gradient-to-r from-[#e9a920ff] to-[hsla(1,92%,47%,1)] text-white Inter-bold"
                            onClick={() => navigate('/introduce')}
                        >
                            Next
                        </motion.button>
                    </motion.div>
                </div>
        
    </div>
  )
}

export default StartAppScreen