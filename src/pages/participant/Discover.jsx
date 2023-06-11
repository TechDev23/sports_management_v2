/* eslint-disable no-unused-vars */
import React from 'react'
import {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

import {useNavigate} from "react-router-dom"

const Discover = () => {

  const navigate = useNavigate();

  return (
    <div className='min-h-screen min-w-screen'>
        <div className="bg-white w-full h-16 flex items-center drop-shadow-xl rounded-lg rounded-t-none rounded-s fixed">
            <Navbar />
        </div>
        <div className=" flex items-center justify-center min-w-screen min-h-screen">
            <h1 className='font-bold text-3xl '>Discover Page</h1>
        </div>
        <div className="bg-white w-full drop-shadow-2xl rounded-md">
            <Outlet />
          </div>
    </div>

  )
}

export default Discover