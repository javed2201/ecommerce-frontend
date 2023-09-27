import React from 'react'
import Badge from './Badge'
import Image from './Image'
import {BsSuitHeartFill} from 'react-icons/bs'
import {FiRefreshCcw} from 'react-icons/fi'
import {FaShoppingCart} from 'react-icons/fa'
import Flex from './Flex'

const Product = ({src, badge}) => {
  return (
    <div>
        <div className='relative overflow-y-hidden group'>
          <Image className='w-full' imgsrc={src} />  
          {badge && <Badge title="new" />}
            <div className='h-40 bg-white absolute bottom-[-44%] lg:max-xl:bottom-[-75%] group-hover:bottom-0 ease-in duration-300 left-0 w-full py-6 px-7'>
                <Flex className="flex gap-x-1 sm:gap-x-4 justify-end items-center">
                    <p className='font-dm font-regular text-base lg:max-xl:text-sm text-[#6d6d6d]'>Add to Wish List</p>
                    <BsSuitHeartFill className='text-base'/>
                </Flex>
                <Flex className="flex gap-x-1 sm:gap-x-4 justify-end items-center my-5">
                    <p className='font-dm font-regular text-base lg:max-xl:text-sm text-[#6d6d6d]'>Compare</p>
                    <FiRefreshCcw className='text-base'/>
                </Flex>
                <Flex className="flex gap-x-1 sm:gap-x-4 justify-end items-center">
                    <p className='font-dm font-regular text-base lg:max-xl:text-sm text-[#6d6d6d]'>Add to Cart</p>
                    <FaShoppingCart className='text-base'/>
                </Flex>
            </div>   
        </div>
        <div className='mb-12 md:mb-0'>
            <Flex className='flex justify-between items-center mt-0 md:mt-6'>
               <h3 className='font-dm font-bold text-xl lg:max-xl:text-sm'>Basic Crew Neck Tee</h3>
               <p className='font-dm font-regular text-base lg:max-xl:text-sm text-[#767676]'>$44.00</p> 
            </Flex>
               <p className='font-dm font-regular text-base lg:max-xl:text-sm text-[#767676] mt-1 md:mt-4'>Black</p> 
        </div>    
    </div>
  )
}

export default Product