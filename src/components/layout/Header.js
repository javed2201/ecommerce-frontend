import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Dropdown from './Dropdown'
import Flex from './Flex'
import {FaBars, FaSearch, FaUserAlt} from 'react-icons/fa' 
import {RxTriangleDown} from 'react-icons/rx' 
import {HiShoppingCart} from 'react-icons/hi' 
import {ImCross} from 'react-icons/im' 
import List from './List'
import ListItem from './ListItem'
import Search from './Search'
import Image from './Image'
import { Link } from 'react-router-dom'

const Header = () => {
    let [categoryDropDownShow, setCategoryDropDownShow] = useState(false)
    let [userDropDownShow, setUserDropDownShow] = useState(false)
    let [cartDropDownShow, setCartDropDownShow] = useState(false)
    let categoryRef = useRef()
    let userRef = useRef()
    let cartRef = useRef()

    useEffect(()=>{
        document.body.addEventListener("click", (e) =>{
            // console.log(e.target)
            if(categoryRef.current.contains(e.target)){
                setCategoryDropDownShow(true)
            } else{
                setCategoryDropDownShow(false)
            }

            if(userRef.current.contains(e.target)){
                setUserDropDownShow(true)
            } else{
                setUserDropDownShow(false)
            }

            if(cartRef.current.contains(e.target)){
                setCartDropDownShow(true)
            } else{
                setCartDropDownShow(false)
            }
        })
    }, [])
    return (
    <div className='bg-[#f3f3f3] py-6'>
        <Container>
            <Flex className="flex justify-between items-center">
                <div className="flex items-center">
                    <Dropdown className="relative z-50" dropref={categoryRef}>
                        <p className="flex items-center gap-x-2.5 font-dm text-sm">
                            <FaBars/>
                            <span className='hidden lg:inline-block'>Shop by Category</span>    
                        </p>
                        {categoryDropDownShow &&
                            <List className="absolute top-8 w-[263px] bg-primary text-[#767676] font-dm text-sm z-10">
                                <ListItem className="py-4 px-5 border-b border-solid border-[#2d2d2d] hover:text-white hover:font-bold hover:px-7 ease-in duration-150" itemname="Accesories" />
                                <ListItem className="py-4 px-5 border-b border-solid border-[#2d2d2d] hover:text-white hover:font-bold hover:px-7 ease-in duration-150" itemname="Furniture" />
                                <ListItem className="py-4 px-5 border-b border-solid border-[#2d2d2d] hover:text-white hover:font-bold hover:px-7 ease-in duration-150" itemname="Electronics" />
                                <ListItem className="py-4 px-5 border-b border-solid border-[#2d2d2d] hover:text-white hover:font-bold hover:px-7 ease-in duration-150" itemname="Clothes" />
                                <ListItem className="py-4 px-5 border-b border-solid border-[#2d2d2d] hover:text-white hover:font-bold hover:px-7 ease-in duration-150" itemname="Bags" />
                                <ListItem className="py-4 px-5 border-b border-solid border-[#2d2d2d] hover:text-white hover:font-bold hover:px-7 ease-in duration-150" itemname="Home appliances" />
                            </List>
                        }
                    </Dropdown>
                </div>
                <div className='w-auto md:w-[600px] relative'>
                    <Search className="w-full py-4 px-5 placeholder:text-[#c4c4c4] placeholder:font-dm placeholder:text-sm" placeholder="Search Products" />
                    <FaSearch className='absolute top-5 right-4 text-[#262626]' />
                </div>
                <div className="flex items-center">
                    <Flex className="flex gap-x-10">
                        <Dropdown className="relative z-50" dropref={userRef}>
                          <div className='flex items-center'>
                            <FaUserAlt /> <RxTriangleDown />
                          </div>  

                          {userDropDownShow &&
                            <List className="absolute top-8 right-0 w-[200px] bg-white text-primary font-dm text-sm text-center border border-solid border-[#F0F0F0] ">
                                <ListItem className="py-4 px-5 border-b border-solid border-[#F0F0F0] hover:bg-primary hover:text-white hover:font-bold ease-in duration-150" itemname="My Account" />
                                <ListItem className="py-4 px-5 border-b border-solid border-[#F0F0F0] hover:bg-primary hover:text-white hover:font-bold ease-in duration-150" itemname="Log Out" />
                            </List>
                        }


                        </Dropdown>                        
                        <div>
                            <Dropdown className="relative z-50" dropref={cartRef}>
                                <HiShoppingCart className='text-xl' /> 
                                {cartDropDownShow &&
                                 <div className='absolute top-8 right-0 w-[360px] border border-solid border-[#F0F0F0] '>
                                    <div className='bg-[#F5F5F3] p-5'>
                                        <Flex className="flex justify-between">
                                            <div>
                                                <Image imgsrc='assets/cartimg.png' />
                                            </div>
                                            <div className='flex flex-col justify-center'>
                                                <h3 className='font-dm font-bold text-sm text-primary'>Black Smart Watch</h3>
                                                <p className='font-dm font-bold text-sm text-primary mt-3'>$44.00</p>
                                            </div>
                                            <div className='flex justify-end items-center'>
                                                <ImCross className='text-sm' />
                                            </div>
                                        </Flex>
                                    </div>
                                    <div className='bg-white  p-5'>
                                        <h4 className='font-dm font-regular text-base text-[#767676]'>Subtotal: <span className='font-bold text-primary'>$44.00</span></h4>
                                        <Link to="#" className='font-dm font-bold text-sm py-4 px-10 border border-solid border-primary inline-block mt-3'>View Cart</Link>
                                        <Link to="#" className='font-dm font-bold text-sm py-4 px-10 border border-solid border-primary bg-primary text-white inline-block mt-3 ml-5'>Checkout</Link>
                                    </div>
                                 </div>
                                }
                            </Dropdown> 
                        </div>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Header