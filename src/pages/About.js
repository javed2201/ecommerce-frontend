import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/layout/Breadcrumb'
import Container from '../components/layout/Container'
import Flex from '../components/layout/Flex'
import Image from '../components/layout/Image'

const About = () => {
  return (
    <Container>
    <Breadcrumb />    
        <Flex className='sm:flex sm:gap-x-10'>
            <div className='md:w-2/4 mb-5 md:mb-0'>
                <Link to='#'><Image imgsrc='assets/aboutimg.png' className='w-full' /></Link>
            </div>
            <div className='md:w-2/4'>
                <Link to='#'><Image imgsrc='assets/aboutimg.png' className='w-full' /></Link>
            </div>
        </Flex>
        <div className='mt-20 md:mt-32 mb-10 md:mb-28 text-justify md:text-center lg:text-left px-2 md:px-0 shadow-sm sm:shadow-none'>
            <h4 className='font-dm font-regular text-2xl sm:text-3xl md:text-4xl lg:text-[39px] '>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h4>
        </div>
        <Flex className='md:flex md:justify-between'>
            <div className='w-full md:w-[32%]'>
                <h4 className='font-dm font-bold text-2xl mb-1 md:mb-3'>Our Vision</h4>
                <p className='font-dm font-regular text-base text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='w-full md:w-[32%]'>
                <h4 className='font-dm font-bold text-2xl mb-1 md:mb-3 mt-6 md:mt-0'>Our Story</h4>
                <p className='font-dm font-regular text-base text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
            </div>
            <div className='w-full md:w-[32%]'>
                <h4 className='font-dm font-bold text-2xl mb-1 md:mb-3 mt-6 md:mt-0'>Our Brands</h4>
                <p className='font-dm font-regular text-base text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>
        </Flex>
    </Container>
  )
}

export default About