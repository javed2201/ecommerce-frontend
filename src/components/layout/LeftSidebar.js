import React from 'react'
import SidebarContent from './SidebarContent'
import { category, colors, brands, prices } from '../../data/data'

const LeftSidebar = () => {
  return (
    <>
      <SidebarContent dropDown={false} droptitle="Shop by Category" data={category} />
      <SidebarContent dropDown={true} droptitle="Shop by Color" data={colors} />
      <SidebarContent dropDown={true} droptitle="Shop by Brand" data={brands} />
      <SidebarContent dropDown={false} droptitle="Shop by Price" data={prices} />
      {/* 
      <SidebarContent dropDown={false} droptitle="Shop by Brand" data={brands} />
      <SidebarContent dropDown={true} droptitle="Shop by Price" data={prices} />
       */}
    </>
  )
}

export default LeftSidebar