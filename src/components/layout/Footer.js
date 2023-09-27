import Container from "./Container";
import React from "react";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Image from "./Image";
import {FaFacebookF} from 'react-icons/fa'
import {ImLinkedin2} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="mt-36 bg-[#F5F5F3] py-14 max-md:pb-4 max-md:relative">
      <Container className=''>
        <Flex className="md:flex">
          <Flex className='flex md:w-[39%] '>
            <div className="w-[27%] md:w-[33%]">
              <h4 className="mb-2 md:mb-4 font-dm text-base font-bold">MENU</h4>
              <List>
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Home"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Shop"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="About"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Contact"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Journal1"
                  href="#"
                />
              </List>
            </div>
            <div className="w-[33%] md:w-[33%]">
              <h4 className="mb-2 md:mb-4 font-dm text-base font-bold">SHOP</h4>
              <List>
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Category 1"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Category 2"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Category 3"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Category 4"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Category 5"
                  href="#"
                />
              </List>
            </div>
            <div className="w-[40%] md:w-[34%]">
              <h4 className="mb-2 md:mb-4 font-dm text-base font-bold">HELP</h4>
              <List>
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Privacy Policy"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Terms & Conditions"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Special E-shop"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Shipping"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Secure Payments"
                  href="#"
                />
              </List>
            </div>
          </Flex>
          <div className="md:flex max-md:mt-6 md:w-[31%] justify-center">
            <div>
              <h4 className="mb-3 md:mb-4 font-dm text-base font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular md:mt-[6px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className="max-md:flex max-md:justify-center ">
          <div className="md:ml-[150px] md:w-[30%] max-md:absolute max-md:top-5 ">
            <Image imgsrc="assets/logo.png" />
          </div>
          </div>
        </Flex>
        <Flex className='md:flex justify-between mt-8 md:mt-16 max-md:text-center'>
          <div className="text-center max-md:block">
          <Flex className='flex gap-6 max-md:justify-center'>
            <FaFacebookF className='text-[#262626]' />
            <ImLinkedin2 className='text-[#262626]' />
            <BsInstagram className='text-[#262626]' />
          </Flex>
          </div>
          <p className="font-dm text-sm max-md:text-[12px] text-[#6D6D6D] mt-2 md:mt-0">
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </p>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
