import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative h-[300px] md:h-[400px] lg:[500px] xl:[600px] 2xl:[700px]'>
      <Image 
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm md:text-lg'>Not sure where to go? Perfect.</p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl duration-300 active:scale-90 transition'>
            I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
