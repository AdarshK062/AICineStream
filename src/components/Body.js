import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Body = () => {
    

  return (
    <div className='bg-navyblue w-full h-full p-0 m-0 min-h-screen'>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Body