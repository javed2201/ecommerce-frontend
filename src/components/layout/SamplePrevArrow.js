import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';

const SamplePrevArrow = ({ style, onClick }) => {
  return (
    <span
      className='!flex justify-center items-center w-12 h-12 2xl:w-16 2xl:h-16 rounded-full bg-[rgba(0,0,0,.2)] absolute top-[35%] left-0 z-50' 
      style={{ ...style, }}
      onClick={onClick}
    >
      <BsArrowLeft className='text-base xl:text-xl text-white' />
    </span>
  )
}

export default SamplePrevArrow
