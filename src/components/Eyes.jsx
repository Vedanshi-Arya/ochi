import React, {useEffect, useState, useRef } from 'react'


function Eyes() {
 

 
  

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
      setRotate(angle )
    })
  })
  return (
    // data-scroll is used to activate locomotive
    <div className='eyes opacity-1 w-full h-screen overflow-hidden'>
        <div  data-scroll data-scroll-speed="-.6" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
          <div className='absolute flex gap-2 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  '>
            <div className="w-[15vw] flex items-center justify-center h-[15vw] rounded-full bg-zinc-100">
              <div className='w-2/3 h-2/3 relative bg-zinc-900 rounded-full'>
                <button className='text-white  absolute  pl-11 pt-11'>Play</button>
                <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8'>
                <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                </div>
                
              </div>
            </div>
            <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className='w-2/3 h-2/3 relative bg-zinc-900 rounded-full'>
                <div  style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8'>
                <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Eyes