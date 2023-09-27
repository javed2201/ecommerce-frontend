import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Product from './Product'
import Heading from './Heading'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
import SampleNextArrow from './SampleNextArrow'
import SamplePrevArrow from './SamplePrevArrow'



const Newarrival = () => {

    let [slideCount, setSlideCount] = useState(4)
    // {<Slider className='sm'/> && setSlideCount(1)} 
    // {<Slider className='md'/> && setSlideCount(2)} 
    // {<Slider className='lg'/> && setSlideCount(3)} 

    const settings = { 
        dots: false, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 4, 
        slidesToScroll: 1, 
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1536,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
          ],
        };
        
    return (
    <div className='mt-5 md:mt-32'>
        <Container>
            <Heading title="New Arrivals" />
            <Slider {...settings} className='sm:flex sm:max-lg:flex-wrap sm:max-md:justify-between gap-x-10'> 
              {/* <Flex className='sm:flex sm:max-lg:flex-wrap sm:max-md:justify-between gap-x-10'> */}
                <div className='sm:max-w-[300px] md:max-w-[345px] lg:max-w-[370px]'>
                    <Product src="assets/p1.png" badge={false} />
                </div>
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
              {/* </Flex> */}
            </Slider> 
        </Container>
    </div>
  )
}

export default Newarrival