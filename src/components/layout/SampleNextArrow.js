import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

const SampleNextArrow = ({  style, onClick }) => {
  return (
    <span
      className='!flex justify-center items-center w-12 h-12 2xl:w-16 2xl:h-16 rounded-full bg-[rgba(0,0,0,.2)] absolute top-[35%] right-[25px]' 
      style={{ ...style, }}
      onClick={onClick}
    >
      <BsArrowRight className='text-base xl:text-xl text-white' />
    </span>
  )
}

export default SampleNextArrow