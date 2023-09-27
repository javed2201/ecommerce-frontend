import React, { useState, useEffect, useRef } from 'react'
import Container from '../components/layout/Container'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/layout/Breadcrumb'
import Flex from '../components/layout/Flex' 
import Pagination from '../components/layout/Pagination'
import LeftSidebar from '../components/layout/LeftSidebar'
import {BsFilterCircleFill} from "react-icons/bs"
import {AiFillCloseCircle} from "react-icons/ai"


const Shop = () => {
  const params = useParams()  
  let [showNumber, setShowNumber] = useState(12)
  let [show, setShow] = useState(true)
  // let closeRef = useRef()

  useEffect(()=>{
    function scrollWidth(e){
      if(window.innerWidth < 575){
        setShow(false)
      } else{
        setShow(true)
      }
    }
    scrollWidth()
    window.addEventListener('resize', scrollWidth)
  }, [])

//   useEffect(()=>{
//     document.body.addEventListener("click", (e) =>{
//         console.log(e.target)
//         if(closeRef.current.contains(e.target)){
//             setShow(true)
//             console.log(e.target)
//         } else{
//           setShow(false)
//         }
//     })
// }, [])

  let handlePaginationchange = (e) => {
    setShowNumber(+e.target.value)
  }

  return (
    <Container>
        <Breadcrumb title='Products' />
        <Flex className='flex gap-x-10 relative'>
          {show && (
            <div className='w-full sm:w-[25%] absolute top-0 left-0 p-5 z-50 sm:static bg-[#f5f5f5] sm:bg-transparent'>
              <AiFillCloseCircle onClick={()=>setShow(!show)} className='text-[#767676] block sm:hidden' />
              <LeftSidebar />
            </div>
          )}

          <div className='w-full md:w-[75%] relative'>
            <div className='flex gap-x-10 mb-3.5 right-0'>
              <div className='flex items-end mb-3 sm:mb-0 ml-3 sm:ml-0 sm:absolute'>
                <BsFilterCircleFill onClick={()=>setShow(!show)} className='inline-block sm:hidden text-2xl text-[#999999]' /> 
              </div>
              <div className='md:flex items-center gap-x-3.5'>
                <span className='inline-block font-dm font-regular text-base text-[#767676] py-2.5'>Sort By:</span>
                <select id="countries" class="md:w-[239px] border border-[#f0f0f0] text-[#767676] focus:border-black block p-2.5 font-dm font-regular text-base">
                  <option selected>Featured</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select> 
              </div>
              <div className='md:flex items-center gap-x-3.5'>
                <span className='inline-block font-dm font-regular text-base text-[#999999] py-2.5'>Show:</span>
                <select id="countries" onClick={handlePaginationchange} class="md:w-[139px] border border-[#f0f0f0] text-[#767676] focus:border-black block p-2.5 font-dm font-regular text-base">
                  <option value="12">12</option>
                  <option value="24">24</option>
                  <option value="48">36</option>
                </select>
              </div>
            </div>
            <Pagination itemsPerPage={showNumber} />
          </div>
        </Flex>
    </Container>
  )
}

export default Shop