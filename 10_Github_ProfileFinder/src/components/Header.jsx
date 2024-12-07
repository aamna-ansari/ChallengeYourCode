import React from 'react'
import Toogle from './Toogle'

const Header = () => {
  return (
    <>
    <header className='flex flex-row justify-evenly  font-mono mt-10 sm:mt-20'>
      <h1 className='font-extrabold text-white lg:text-2xl'>GitHub Profile Finder</h1>
    <Toogle/>
    </header>
    </>
  )
}

export default Header