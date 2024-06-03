import React from 'react'
import { Zoom } from 'react-reveal'

import {WorksData} from '../database/works.db'
import Social from './Social'
const Works = () => {
  return (
    <div className='bg-[#edf2f8] py-5' id='works' >
        <div className='font-bold flex gap-2 text-[35px] md:text-[50px] my-10 mt-5 md:my-16 justify-center'>
            <span>My</span>
            <span className='text-[#313bac]'>Works</span>
        </div>
        <div className='flex flex-col justify-center items-center gap-5 '>

        { WorksData.map(item=>(

           <Zoom center>
            <div key={item.id} className='max-w-[330px] sm:max-w-[400px] md:max-w-[768px] lg:max-w-[900px] p-5 md:p-12 bg-[white] rounded-[10px] relative'>
                <img src= { item.img } alt="" className='w-full rounded-[10px] border-[1px] border-solid border-[purple]' />
                <div className='flex flex-col gap-3 md:gap-5 mt-10'>
                    <h1 className='font-bold'> {item.title}</h1>
                    <p className='text-[#5f6064] text-[14px]'> {item.date}</p>
                    <p className='text-[#5f6064] text-[14px]'>{item.description}</p>
                    <b>Stack:</b>
                    <p className='text-[15px]'>{item.stack}</p>
                    <div className='flex gap-5 justify-center md:justify-start mt-5'>
                        <a href={item.link} target='blank' class="text-white bg-[#313bac] from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">Demo</a>
                        <a href={item.github} target='blank' class="text-white bg-[#313bac] from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">Code</a>
                    </div>

                </div>
            </div>
            </Zoom>
                ) ) }  
        </div>
                <div className='text-[14px] py-5 text-right w-[90%] md:absolute bottom-[20px] right-[40px] mt-[20px]'>@Jurayev_006 </div>
      <Social/>  
    </div>

  )
}

export default Works