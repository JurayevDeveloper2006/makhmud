import React from 'react'

const Inputs = () => {
  return (
    <div className='my-20 flex flex-col gap-5 justify-center items-center' >
        <input type="text" className='min-w-[300px] w-full sm:max-w-[1000px] px-[15px] py-[15px] border-none outline-none bg-[#edf2f8] rounded-[10px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.08)] cursor-pointer' placeholder='Your Name'/>
        <input type="email" className='min-w-[300px] w-full sm:max-w-[1000px] px-[15px] py-[15px] border-none outline-none bg-[#edf2f8] rounded-[10px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.08)] cursor-pointer' placeholder='Your Email'/>
        <textarea
        className='min-w-[300px] w-full sm:max-w-[1000px] h-[130px] md:h-[200px] px-[15px] py-[15px] border-none outline-none bg-[#edf2f8] rounded-[10px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.08)] cursor-pointer' placeholder='Your Message'>
        </textarea>
        <a  class="text-white bg-[#313bac] from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 max-w-[200px]">Send Message</a>

    </div>
  )
}

export default Inputs