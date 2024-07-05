import React , {useEffect,useState} from 'react'
import { motion } from 'framer-motion';


function Ready() {

    const [rotate,setRotate]=useState(0);

    useEffect(()=>{
      window.addEventListener("mousemove",(e)=>{
        let mouseX =e.clientX; 
        //  this will give value value of mouse in x direction
        let mouseY = e.clientY;
        let deltaX = mouseX - window.innerWidth/2;
        let deltaY =mouseY - window.innerHeight/2;
  
        // this will give the distance of mouse from center of screen
  
        var angle= Math.atan2(deltaX , deltaY) * (180/Math.PI)
        setRotate(angle -180 )
      })
    })


  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className=' grid place-items-center ready  pb-10 w-full h-full bg-[#CDEA68]'>
        <div className='info text-center  top-12'>{["READY","TO START","THE PROJECT?"].map((items,index)=>{
            return (<h1 key={index} className='text-[5vw] leading-none tracking-tighter font-bold '>{items}</h1>)
        })}</div>

        <div className='mt-5 flex items-center gap-5'>
            <div className="w-[15vw] flex items-center justify-center h-[15vw] rounded-full bg-zinc-100">
                <div className='w-2/3 h-2/3 relative bg-zinc-900 rounded-full'>
                    <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8'>
                    <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
                    </div>    
                </div>
            </div>
            <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
                <div className='w-2/3 h-2/3 relative bg-zinc-900 rounded-full'>
                    <div  style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8'>
                    <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
                </div>
            </div>
        </div>
        </div>
        <div className='mt-10 text'> 
            <button className=' bg-black text-[white] rounded-full px-5 py-2 flex items-center gap-3'>START THE PROJECT
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div></button>
                <h1 className='text-[2vw]  text-center '>or</h1>
                <button className=' bg-black text-[white] rounded-full px-5 py-2 flex items-center gap-3'>HELLO@OCHI.DESIGN
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div></button> 
        </div>
    </div>
        
                




        
        
        
    
    
  )
}

export default Ready;