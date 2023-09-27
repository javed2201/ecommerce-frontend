import React from 'react'

const InputBox = (props) => {
  return (
    <div className='mb-6'>
        <h4 className='font-dm font-bold text-base placeholder:font-dm placeholder:font-regular placeholder:text-sm placeholder:text-[#767676] mb-2.5'>{props.title}</h4>
        <props.as placeholder={props.placeholder} className='pb-2.5 border-b border-solid border-[#f0f0f0] w-full outline-0 resize-none' />
    </div>
  )
}

export default InputBox