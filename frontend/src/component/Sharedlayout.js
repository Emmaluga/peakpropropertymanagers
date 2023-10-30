import React from 'react'
import Navhead from './Navhead'
import { Outlet } from 'react-router-dom'

const Sharedlayout = () => {
  return (
    <div className='homepage'>

        <Navhead />
        <Outlet />
      
    </div>
  )
}

export default Sharedlayout
