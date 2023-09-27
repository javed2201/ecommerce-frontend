import React from 'react'
import Container from './Container'
import Flex from './Flex'
import {TbNumber2} from 'react-icons/tb'
import {MdLocalShipping} from 'react-icons/md'
import {IoMdRefresh} from 'react-icons/io'

const AdditionalInfo = ({children, className}) => {
  return (
    <div className='border border-solid border-[#f0f0f0] py-2 sm:py-7 mt-[-6px]'>
    <Container>
        <Flex className="flex justify-between">
            <Flex className="flex gap-x-1 sm:gap-x-4 items-center">
                <TbNumber2 className='text-[10px] sm:text-2xl'/>
                <p className='font-dm font-regular text-[10px] sm:text-base text-[#6d6d6d]'>Two years warranty</p>
            </Flex>
            <Flex className="flex gap-x-1 sm:gap-x-4 items-center">
                <MdLocalShipping className='text-[10px] sm:text-2xl'/>
                <p className='font-dm font-regular text-[10px] sm:text-base text-[#6d6d6d]'>Free shipping</p>
            </Flex>
            <Flex className="flex gap-x-1 sm:gap-x-4 items-center">
                <IoMdRefresh className='text-[10px] sm:text-2xl' 
                style={{transform: "rotateY(180deg)"}}
                />
                <p className='font-dm font-regular text-[10px] sm:text-base text-[#6d6d6d]'>Return policy in 30 days</p>
            </Flex>
        </Flex>
    </Container> 
    </div>
  )
}

export default AdditionalInfo