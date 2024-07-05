import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
import {motion} from "framer-motion"


function LandingPage() {
    

  return (
    // by using data-scroll we can control speed
    <div data-scroll data-scroll-section data-scroll-speed="-.3"className='w-full h-screen pt-1 '>


        <div className='w-100% flex justify-between'>

            <div className='text-structure  mt-40 px-20  '>
                {["We Create","Eye Opening","Presentations"].map((item,index)=>{
                    return (
                        <div key={index} className='masker'>
                            <div className='w-fit flex items-end  '>
                            {index===1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1] , duration:1}}className="mr-5 w-[8vw] rounded-md h-[5.7vw] relative top-[1vw] ">
                                <img className='mt-1 rounded mr-1' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"></img>
                            </motion.div>)}
                            <h1 className='pt-[2vw] -mb-[1vw] uppercase text-[7vw] leading-[5.5vw] tracking-tighter font-medium '>{item}</h1>
                            
                            </div>
                        </div>);
                })}
                {/* leading-none is used for reducing line height and tracking- tighter is used for reducing letter spacing*/}
            </div> 
            
            <div className='ml-80  img mt-52 '>
                <img src="https://ochi-website-clone.vercel.app/_next/static/media/awwwards.c7ef625d.svg"></img>
            </div>

        </div>
        


        
        <div className='border-t-[1.5px]  mt-32  flex justify-between items-center py-1 px-20'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
               return <p key={index} className='text-md font-sb tracking-tight mb-2 leading-none'>{item}</p>
            })}
             <div  className='start  flex items-center gap-1'>
            <motion.div  whileHover={{background:"black", color:"white" } } className='py-1 px-2 border-[2px] mb-2 rounded-full'>
                <button >START THE PROJECT</button>
            </motion.div>
            <div className='w-9 h-9 border-[2px] mb-2 flex items-center justify-center rounded-full'><span className='rotate-[45deg]'><FaLongArrowAltUp /></span></div>
        </div>

        </div>
       
    </div>
  )
}

export default LandingPage