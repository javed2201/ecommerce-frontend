import React, {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

const LeftSidebarItem = (props) => {

let [show, setShow] = useState(false)
let [drop, setDrop] = useState(props.subDropDown)

  return (
    <div>
        {drop 
        ?
        (<div onClick={()=>setShow(!show)} className='flex items-center justify-between cursor-pointer border-b border-solid py-5'>
          <h3 className='font-dm font-regular text-base cursor-pointer text-[#767676]'>
          {props.color && 
          <span className='inline-block h-[11px] w-[11px] rounded-full mr-2' style={{background: props.color}}></span>}
          {props.title}</h3>
          <AiOutlinePlus className='text-[#767676]' />
        </div>)
        :
        (<div className='flex items-center justify-between cursor-pointer border-b border-solid py-5'>
          <h3 className='font-dm font-regular text-base cursor-pointer text-[#767676]'>
          {props.color && 
          <span className='inline-block h-[11px] w-[11px] rounded-full mr-2' style={{background: props.color}}></span>}
          {props.title}</h3>
        </div>)
        }
        
        {show && (
            <div>
                {props.children}
            </div>
        )}
    </div>
  )
}

export default LeftSidebarItem