import React from 'react'
import { FaTelegram } from "react-icons/fa"
import { RiWhatsappFill } from "react-icons/ri";

const Social = () => {
  return (
    <div className='absolute left-[20px] bottom-[20px] md:block hidden'>
        <a href='https://t.me/Jurayev_006' target='blank' className='text-[grey] text-[25px] w-[50px] h-[50px] bg-[white] flex justify-center items-center rounded-full hover:bg-[#313bac] hover:text-[white] transition-all mb-2' >
            <FaTelegram/>
        </a >
        <a href='https://wa.me/+998880717151' target='blank' className='text-[green] text-[25px] w-[50px] h-[50px] bg-[white] flex justify-center items-center rounded-full hover:bg-[green] hover:text-[white] transition-all'> 
            <RiWhatsappFill />      
        </a>
    </div>
  )
}

export default Social