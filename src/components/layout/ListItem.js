import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({itemname, className, href}) => {
  return (
    <Link to={href}>
    <li className={className}>{itemname}</li>
    </Link>
  )
}

export default ListItem 