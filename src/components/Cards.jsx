import React from 'react'
import { motion } from 'framer-motion'

function Cards() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full flex items-center px-32 gap-5 h-screen '>
        <div className=' cardcontainer h-[50vh] w-1/2 '>
            <div className=' card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]'>
              <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
              <buttton className=" absolute border-2 px-5 py-1 border-[#CDEA68] left-10 bottom-10 rounded-full text-[#CDEA68] ">&copy;2019-2022</buttton>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 h-[50vh] w-1/2 '>
            <div className='card relative flex justify-center items-center w-1/2 h-full rounded-xl bg-[#192826]'>
              <img className=" w-25"src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"></img>
              <button className=' absolute px-5 py-1 text-[white] bottom-10 rounded-full border-2'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className='card relative flex justify-center items-center w-1/2 rounded-xl h-full bg-[#192826]'>
              <img className="w-20"src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"></img>
              <button className='absolute px-0.5 py-1 text-[white] bottom-10 rounded-full border-2'>BUSINESS BOOTCAMP ALUMINI</button>
            </div>

        </div>
    </div>
  )
}

export default Cards