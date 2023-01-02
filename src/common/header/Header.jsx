import React from 'react'
import './header.css'
import Head from './Head'
import Search from './Search'
import Navbar from './Navbar'

const Header = ({ CartItem }) => {
  return (
    <>
      <Head />
      <Search />
      <Navbar />
    </>
  )
}

export default Header
