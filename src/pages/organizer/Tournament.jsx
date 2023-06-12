import React from 'react'
import { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

import { AiFillEdit } from 'react-icons/ai';
import { GrDocumentUpdate } from 'react-icons/gr';
import { MdOutlineEditOff }  from 'react-icons/md';

import { useNavigate } from 'react-router-dom';

const Tournament = () => {

  const [edit, setEdit] = useState(true);

  const [inputFieldStates, setInputFieldStates] = useState([]);

   // Function to handle update button click for a specific input
   // Function to handle update button click
  const handleUpdateClick = (index) => {
    // Logic to handle update button click for the specific row
    const updatedRow = inputFieldStates[index];
    console.log(`Update clicked for row ${index}`);
    console.log(updatedRow);
  };

  // Function to handle changes in input fields
  const handleInputChange = (index, fieldIndex, event) => {
    const values = [...inputFieldStates];
    values[index][fieldIndex] = event.target.value;
    setInputFieldStates(values);
    console.log(values[index]);
  };

  // Function to render input fields and buttons dynamically
  const renderInputFieldsAndButtons = () => {
    return inputFieldStates.map((row, index) => (
      <div key={index} className='flex flex-row justify-between w-ful px-4 py-4 rounded-xl items-center border-b'>
      
      <div className='text-lg'>
      Manchester City
      </div>
  
      <div className={`bg-gray-50 rounded-3xl shadow-sm flex items-center ${!edit && "border-2"}`}>
      
      <input
        value={row[0]}
        onChange={(event) => handleInputChange(index, 0, event)}
        className='w-[55px] rounded-l-3xl py-2 text-right pr-2 outline-none'
        disabled={edit}
      />
      <h1 className='h-full bg-gray-50'>:</h1>
      <input
        value={row[1]}
        onChange={(event) => handleInputChange(index, 1, event)}
        className='w-16 rounded-r-3xl py-2 text-left pl-2 outline-none'
        disabled= {edit}
      />
      
      </div>

      <div className='text-lg'>
      Manchester United
      </div>

      <div className='flex flex-row space-x-4 items-center'>
      
        <button onClick={() => setEdit(!edit)} className='border border-orange-500 text-orange-500 py-4 px-4 font-bold rounded-xl shadow-sm  transition-all'>
        {

          edit ? (<MdOutlineEditOff/>) : (
            
        <AiFillEdit/>
          )
        }
        
        
        </button>
        <button onClick={() => handleUpdateClick(index)} className='border border-blue-gray-900 text-blue-gray-900 py-4 px-4 font-bold rounded-xl shadow-sm'><GrDocumentUpdate/></button>

      </div>

      </div>
    ));
  };

  // Assuming you receive the data from the backend as an array
  const dataFromBackend = [
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
  ];

  // Update the inputFieldStates when dataFromBackend changes
  useEffect(() => {
    setInputFieldStates(dataFromBackend);
  }, []);

  const navigate = useNavigate();

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className='p-2 '>

    <div className='space-y-4'>
      <div>
      <p className='py-4  text-3xl w-full'>
      Current Matches
      </p>

      <div className='flex flex-row justify-between'>
        <div className='flex flex-row space-x-4 flex-start'>
          <button className='border border-orange-500 text-orange-500 p-0 px-4 font-bold rounded-2xl'>All</button>
          <button className='border border-orange-500 text-orange-500 p-0 px-4 font-bold rounded-2xl'>Round 1</button>
          <button className='border border-orange-500 text-orange-500 p-0 px-4 font-bold rounded-2xl'>Round 2</button>
          <button className='border border-orange-500 text-orange-500 p-0 px-4 font-bold rounded-2xl'>Round 3</button>
        
        </div>
        <div className='bg-gray-100 py-2 px-4 rounded-xl text-blue-gray-900'>
          {date}
        </div>
      </div>
      </div>

      <div className='space-y-4'>

      <div className='w-3/4 py-4 px-4 rounded-xl space-y-4 border-2'>
        <div className='font-poppins p-1 px-2 font-bold w-fit rounded-xl'>Round 1</div>
          <div className='space-y-4'>
            {renderInputFieldsAndButtons()}
        </div>
      </div>

      <div className='w-3/4 py-4 px-4 rounded-xl space-y-4 border-2'>
        <div className='font-poppins p-1 px-2 font-bold w-fit rounded-xl'>Round 2</div>
          <div className='space-y-4'>
            {renderInputFieldsAndButtons()}
        </div>
      </div>


      <div className='w-3/4 py-4 px-4 rounded-xl space-y-4 border-2'>
        <div className='font-poppins p-1 px-2 font-bold w-fit rounded-xl'>Round 3</div>
          <div className='space-y-4'>
            {renderInputFieldsAndButtons()}
        </div>
      </div>

      </div>

    </div>

    </div>
  )
}

export default Tournament