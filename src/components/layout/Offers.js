import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Product from './Product'
import Heading from './Heading'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
import SampleNextArrow from './SampleNextArrow'
import SamplePrevArrow from './SamplePrevArrow'



const Offers = () => {

    let [slideCount, setSlideCount] = useState(4)
    // {<Slider className='sm'/> && setSlideCount(1)} 
    // {<Slider className='md'/> && setSlideCount(2)} 
    // {<Slider className='lg'/> && setSlideCount(3)} 
        
    return (
    <div className='mt-5 md:mt-32'>
        <Container>
            <Heading title="Special Offers" />
              <Flex className='sm:flex sm:max-lg:flex-wrap sm:max-md:justify-between gap-x-10'>
                <div className='sm:max-w-[300px] md:max-w-[345px] lg:max-w-[370px]'>
                    <Product src="assets/p1.png" badge={true} />
                </div>
                <div className='sm:max-w-[300px] md:max-w-[345px] lg:max-w-[370px]'>
                    <Product src="assets/p1.png" badge={false} />
                </div>
                <div className='sm:max-w-[300px] md:max-w-[345px] lg:max-w-[370px]'>
                    <Product src="assets/p1.png" badge={true} />
                </div>
                <div className='sm:max-w-[300px] md:max-w-[345px] lg:max-w-[370px]'>
                    <Product src="assets/p1.png" badge={true} />
                </div>
              </Flex>
        </Container>
    </div>
  )
}

export default Offers