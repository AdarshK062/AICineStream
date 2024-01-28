import React from 'react'
import logo from '../images/logo.png';

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
        <img src={logo} className="h-32 p-4" alt="logo" />
    </div>
  )
}

export default Header