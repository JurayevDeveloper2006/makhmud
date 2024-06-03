import React from 'react'
import Telegram from "../assets/telegram.png"
import LinkedIn from "../assets/linkedin.png"
import Phone from "../assets/phone.png"
import Inputs from './Inputs'

const Contact = () => {
  return (
    <div id='contact' >
        <div className='font-bold flex gap-2 text-[35px] md:text-[50px] my-10 mt-5 md:my-16 justify-center'>Contact Me</div>
        <div className='max-w-[700px] w-full m-auto px-5 '>
            <div className='flex flex-wrap justify-center items-center gap-5  md:gap-10 mb-10'>
            <a className='flex min-w-[300px] w-full sm:-w-full h-[70px] px-10 justify-start gap-2 items-center bg-[#fef4f5] rounded-[10px] shadow-md hover:shadow-lg cursor-pointer'>
                <img src={LinkedIn} alt="LinkedIn" className='w-[50px]' />
                <span className='text-[#5e6064]'>in/mahmud-jurayev</span>
            </a>

            <a href='https://t.me/Jurayev_006' target='blank' className='flex min-w-[300px] w-full sm:-w-full h-[70px] px-5 justify-start gap-2 items-center bg-[#fef4f5] rounded-[10px] shadow-md hover:shadow-lg cursor-pointer'>
                <img src={Telegram} alt="Telegram" className='w-[50px]' />
                <span className='text-[#5e6064]'>t.me/Jurayev_006</span>
            </a>

            <a href='tel:+998912116620' className='flex min-w-[300px] w-full sm:-w-full h-[70px] px-10 justify-start gap-3 items-center bg-[#fef4f5] rounded-[10px] shadow-md hover:shadow-lg cursor-pointer'>
                <img src={Phone} alt="Phone" className='w-[30px]' />
                <span className='text-[#5e6064]'> +(998) 88 071 71 51</span>
            </a>

            </div>
        <Inputs/>
        </div>
    </div>
  )
}

export default Contact