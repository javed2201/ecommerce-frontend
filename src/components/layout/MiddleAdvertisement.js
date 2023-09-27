import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import Image from './Image'

const MiddleAdvertisement = () => {
  return (
    <Container>
        <div className='w-full md:mt-32'>
          <Link to='#'>
            <Image imgsrc='assets/middleadd.png' /> 
          </Link>
        </div>
    </Container>
    
  )
}

export default MiddleAdvertisement