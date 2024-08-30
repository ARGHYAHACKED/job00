import React from 'react'

import ImageSlider from './imageSlider'


const Page1 = () => {
  return (
    <div className='flex justify-between   h-[450px]'>
        <div className='left  h-screen w-2/3 p-16 m-4 '>
        <h1 className='font-bold text-9xl'>We Build</h1>
        <h2 className='font-bold text-8xl'>" "Dreams" "</h2>
        <h5 className='text-5xl mt-12 '>Join with Us</h5>
        </div>
        <div className='right  h-screen w-1/3 '>
       
        <ImageSlider/>
        </div>
        

    </div>
  )
}

export default Page1