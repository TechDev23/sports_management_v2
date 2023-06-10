/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from "../pages/Navbar";

const participant = () => {
  return (
    <>
      <div className="flex">
        <div className="w-screen m-1 ml-2 mt-0 flex flex-col items-center justify-start">
          <div className="bg-white w-full h-16 flex items-center drop-shadow-xl rounded-lg rounded-t-none rounded-s">
            <Navbar />
          </div>
          <div className="bg-white mt-4 w-full min-h-screen drop-shadow-2xl rounded-md">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default participant