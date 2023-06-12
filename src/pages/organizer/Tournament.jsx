import React from 'react'

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

import { useNavigate } from 'react-router-dom';

const Tournament = () => {

  const navigate = useNavigate();

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className='p-2'>
      <div className='font-bold text-3xl text-blue-gray-900 border-b-2 py-2'>Recent Matches</div>
      <div className='py-4 w-full h-full flex flex-wrap gap-8 items-center justify-center'>


        <div className='font-bold  bg-gray-50  w-96 h-56 rounded-2xl p-4 space-y-4 shadow-lg'>

          <div className='flex justify-between items-center'>
          <p className='text-center  bg-gray-100 rounded-xl p-1 px-2 text-sm'>Match 1</p>
          
          <p className='p-1 px-2 bg-green-500 text-white rounded-xl font-normal text-sm'>round 2</p>
          </div>
          <div className='flex flex-row justify-between text-md items-center space-x-4'>
            <p className='bg-orange-50 text-orange-600 w-full text-center p-1 px-2 rounded-xl'>team 1</p>
            <p className='bg-orange-600 text-white p-1 px-2 rounded-lg'>VS</p>
            <p className='bg-orange-50 text-orange-600 w-full text-center p-1 px-2 rounded-xl'>team 2</p>
          </div>
          <div className='flex justify-between items-center text-md'>
          <p className='bg-gray-100 p-1 px-2 rounded-xl'>scheduled at <span className='text-green-500 p-2 rounded-xl'>{date}</span></p>
          <p className='bg-green-50 p-1 px-2 text-green-500 rounded-xl'>ongoing</p>
          </div>
          
          <button onClick={() => navigate("/organizer/match")} className='text-white bg-orange-400 hover:bg-orange-600 px-2 p-1 rounded-xl'>Update score</button>
        </div>

        <div className='font-bold  bg-gray-50  w-96 h-56 rounded-2xl p-4 space-y-4 shadow-lg'>

          <div className='flex justify-between items-center'>
          <p className='text-center  bg-gray-100 rounded-xl p-1 px-2 text-sm'>Match 2</p>
          
          <p className='p-1 px-2 bg-green-500 text-white rounded-xl font-normal text-sm'>round 3</p>
          </div>
          <div className='flex flex-row justify-between text-md items-center space-x-4'>
            <p className='bg-orange-50 text-orange-600 w-full text-center p-1 px-2 rounded-xl'>team 1</p>
            <p className='bg-orange-600 text-white p-1 px-2 rounded-lg'>VS</p>
            <p className='bg-orange-50 text-orange-600 w-full text-center p-1 px-2 rounded-xl'>team 2</p>
          </div>
          <div className='flex justify-between items-center text-md'>
          <p className='bg-gray-100 p-1 px-2 rounded-xl'>scheduled at <span className='text-green-500 p-2 rounded-xl'>{date}</span></p>
          <p className='bg-green-50 p-1 px-2 text-green-500 rounded-xl'>ongoing</p>
          </div>
          
          <button onClick={() => navigate("/organizer/match")} className='text-white bg-orange-400 hover:bg-orange-600 px-2 p-1 rounded-xl'>Update score</button>
        </div>


        
        <div className='font-bold  bg-gray-50  w-96 h-56 rounded-2xl p-4 space-y-4 shadow-lg'>

          <div className='flex justify-between items-center'>
          <p className='text-center  bg-gray-100 rounded-xl p-1 px-2 text-sm'>Match 3</p>
          
          <p className='p-1 px-2 bg-green-500 text-white rounded-xl font-normal text-sm'>round 1</p>
          </div>
          <div className='flex flex-row justify-between text-md items-center space-x-4'>
            <p className='bg-orange-50 text-orange-600 w-full text-center p-1 px-2 rounded-xl'>team 1</p>
            <p className='bg-orange-600 text-white p-1 px-2 rounded-lg'>VS</p>
            <p className='bg-orange-50 text-orange-600 w-full text-center p-1 px-2 rounded-xl'>team 2</p>
          </div>
          <div className='flex justify-between items-center text-md'>
          <p className='bg-gray-100 p-1 px-2 rounded-xl'>scheduled at <span className='text-green-500 p-2 rounded-xl'>{date}</span></p>
          <p className='bg-green-50 p-1 px-2 text-green-500 rounded-xl'>ongoing</p>
          </div>
          
          <button onClick={() => navigate("/organizer/match")} className='text-white bg-orange-400 hover:bg-orange-600 px-2 p-1 rounded-xl'>Update score</button>
        </div>

        <div className='font-bold  bg-gray-50  w-96 h-56 rounded-2xl p-4 space-y-4 shadow-lg'>

          <div className='flex justify-between items-center'>
          <p className='text-center  bg-gray-100 rounded-xl p-1 px-2 text-sm'>Match 4</p>
          
          <p className='p-1 px-2 bg-green-500 text-white rounded-xl font-normal text-sm'>round 2</p>
          </div>
          <div className='flex flex-row justify-between text-md items-center space-x-4'>
            <p className='bg-orange-50 text-orange-600 w-full text-center p-1 px-2 rounded-xl'>team 1</p>
            <p className='bg-orange-600 text-white p-1 px-2 rounded-lg'>VS</p>
            <p className='bg-orange-50 text-orange-600 w-full text-center p-1 px-2 rounded-xl'>team 2</p>
          </div>
          <div className='flex justify-between items-center text-md'>
          <p className='bg-gray-100 p-1 px-2 rounded-xl'>scheduled at <span className='text-green-500 p-2 rounded-xl'>{date}</span></p>
          <p className='bg-green-50 p-1 px-2 text-green-500 rounded-xl'>ongoing</p>
          </div>
          
          <button onClick={() => navigate("/organizer/match")} className='text-white bg-orange-400 hover:bg-orange-600 px-2 p-1 rounded-xl'>Update score</button>
        </div>

        <div className='font-bold  bg-gray-50  w-96 h-56 rounded-2xl p-4 space-y-4 shadow-lg'>

          <div className='flex justify-between items-center'>
          <p className='text-center  bg-gray-100 rounded-xl p-1 px-2 text-sm'>Match 5</p>
          
          <p className='p-1 px-2 bg-green-500 text-white rounded-xl font-normal text-sm'>round 1</p>
          </div>
          <div className='flex flex-row justify-between text-md items-center space-x-4'>
            <p className='bg-orange-50 text-orange-600 w-full text-center p-1 px-2 rounded-xl'>team 1</p>
            <p className='bg-orange-600 text-white p-1 px-2 rounded-lg'>VS</p>
            <p className='bg-orange-50 text-orange-600 w-full text-center p-1 px-2 rounded-xl'>team 2</p>
          </div>
          <div className='flex justify-between items-center text-md'>
          <p className='bg-gray-100 p-1 px-2 rounded-xl'>scheduled at <span className='text-green-500 p-2 rounded-xl'>{date}</span></p>
          <p className='bg-green-50 p-1 px-2 text-green-500 rounded-xl'>ongoing</p>
          </div>
          
          <button onClick={() => navigate("/organizer/match")} className='text-white bg-orange-400 hover:bg-orange-600 px-2 p-1 rounded-xl'>Update score</button>
        </div>
      </div>
    </div>
  )
}

export default Tournament