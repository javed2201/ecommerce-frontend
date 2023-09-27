import React, { useState } from 'react'
import Flex from './Flex'
import {GoTriangleDown} from 'react-icons/go'
import LeftSidebarItem from './LeftSidebarItem'

const SidebarContent = ({dropDown, droptitle, data}) => {

let [show, setShow] = useState(dropDown)
let [drop, setDrop] = useState(dropDown)

  return (
    <div className='mb-14'>
        {drop 
        ?
        (<div onClick={()=>setShow(!show)} className='flex items-center justify-between cursor-pointer mb-4'>
            <h3 className='font-dm font-bold text-xl'>{droptitle}</h3>
            <GoTriangleDown />
        </div>)
        :
        (<h3 className='cursor-pointer font-dm font-bold text-xl mb-4'>{droptitle}</h3>)
        }
        
        {show && (
            <>
            {data.map((item, index)=>(
                item.subcategory?
                (
                    <LeftSidebarItem subDropDown={item.subcategory?true:false} title={item.name} >
                        {item.subcategory && item.subcategory.map((sitem) => (
                            <h1 className='cursor-pointer font-dm font-regular text-base text-[#767676] border-b border-solid py-5'>{sitem.name}</h1>
                        ))}
                    </LeftSidebarItem>
                )
                :
                (
                    <LeftSidebarItem subDropDown={item.subcategory?true:false} title={item.name} color={item.code} >
                        {item.subcategory && item.subcategory.map((sitem) => (
                            <h1 className='cursor-pointer font-dm font-regular text-base text-[#767676] border-b border-solid py-5'>{sitem.name}</h1>
                        ))}
                    </LeftSidebarItem>                    
                )
            ))}
            </>
        )}
        {!drop && (
            <>
            {data.map((item)=>(
                item.subcategory?
                (
                    <LeftSidebarItem subDropDown={item.subcategory?true:false} title={item.name} color={item.code} >
                        {item.subcategory && item.subcategory.map((sitem) => (
                            <h1 className='cursor-pointer font-dm font-regular text-base text-[#767676] border-b border-solid py-5'>{sitem.name}</h1>
                        ))}
                    </LeftSidebarItem>
                )
                :
                (
                    <LeftSidebarItem subDropDown={item.subcategory?true:false} title={item.name} color={item.code} >
                        {item.subcategory && item.subcategory.map((sitem) => (
                            <h1 className='cursor-pointer font-dm font-regular text-base text-[#767676] border-b border-solid py-5'>{sitem.name}</h1>
                        ))}
                    </LeftSidebarItem>                    
                )
            ))}
            </>
        )}
    </div>
  )
}

export default SidebarContent