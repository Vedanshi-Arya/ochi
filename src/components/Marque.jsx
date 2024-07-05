import React from 'react'
import {motion} from 'framer-motion'

function Marque() {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".1" className=' w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 overflow-hidden  flex  whitespace-nowrap'>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity , ease:'linear' ,duration:5 }} className='text-[15vw] text-[white] leading-none  tracking:tight font-semibold uppercase pr-20'>we are ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity , ease:'linear',duration:5 }} className='text-[15vw] text-[white] leading-none tracking:tighter font-semibold uppercase pr-20'>we are ochi</motion.h1>

      </div>
    </div>
  )
}

export default Marque