import { useState } from 'react';
import { Input, Button} from "@material-tailwind/react";

export default function Rosters() {
    
  return (
    <div>
      <div className='min-w-screen py-5  rounded border border-gray-600'>
        <p className='ml-2 text-gray-500'>Roster Round 1</p>
        <div className='flex flex-col p-2 space-y-3'>
        <div className='flex flex-row rounded-lg items-center justify-evenly gap-2'>
          <div>
            <Input label="Team 1" color='orange' />
          </div>
          <div>
            <p className='p-2 bg-orange-600 text-white rounded-md'> VS </p>
          </div>
          <div>
            <Input label="Team 8" color='orange' />
          </div>
          <div>
            <Input label="Time and Place details" color='orange' />
          </div>
        </div>

        <div className='flex flex-row rounded-lg items-center justify-evenly gap-2'>
          <div>
            <Input label="Team 2" color='orange' />
          </div>
          <div>
            <p className='p-2 bg-orange-600 text-white rounded-md'> VS </p>
          </div>
          <div>
            <Input label="Team 7" color='orange' />
          </div>
          <div>
            <Input label="Time and Place details" color='orange' />
          </div>
        </div>

        <div className='flex flex-row rounded-lg items-center justify-evenly gap-2'>
          <div>
            <Input label="Team 3" color='orange' />
          </div>
          <div>
            <p className='p-2 bg-orange-600 text-white rounded-md'> VS </p>
          </div>
          <div>
            <Input label="Team 6" color='orange' />
          </div>
          <div>
            <Input label="Time and Place details" color='orange' />
          </div>
        </div>

        <div className='flex flex-row rounded-lg items-center justify-evenly gap-2'>
          <div>
            <Input label="Team 4" color='orange' />
          </div>
          <div>
            <p className='p-2 bg-orange-600 text-white rounded-md'> VS </p>
          </div>
          <div>
            <Input label="Team 5" color='orange' />
          </div>
          <div>
            <Input label="Time and Place details" color='orange' />
          </div>
        </div>

        <div>
        <div className='mt-4 flex flex-row rounded-lg justify-center content-center items-center space-x-14'>
             <Button color='orange'>Customize</Button>
             <Button color='orange'>Declare</Button>
            </div>
        </div>
        </div>
      </div>

      <div className='min-w-screen py-5 my-4 rounded border border-gray-600'>
        <p className='ml-2 text-gray-500'>Roster Round 2</p>
        <div className='flex flex-col p-2 space-y-3'>
        <div className='flex flex-row rounded-lg items-center justify-evenly gap-2'>
          <div>
            <Input label="Team 1" color='orange' />
          </div>
          <div>
            <p className='p-2 bg-orange-600 text-white rounded-md'> VS </p>
          </div>
          <div>
            <Input label="Team 8" color='orange' />
          </div>
          <div>
            <Input label="Time and Place details" color='orange' />
          </div>
        </div>

        <div className='flex flex-row rounded-lg items-center justify-evenly gap-2'>
          <div>
            <Input label="Team 2" color='orange' />
          </div>
          <div>
            <p className='p-2 bg-orange-600 text-white rounded-md'> VS </p>
          </div>
          <div>
            <Input label="Team 7" color='orange' />
          </div>
          <div>
            <Input label="Time and Place details" color='orange' />
          </div>
        </div>

  

        <div>
        <div className='mt-4 flex flex-row rounded-lg justify-center content-center items-center space-x-14'>
             <Button color='orange'>Customize</Button>
             <Button color='orange'>Declare</Button>
            </div>
        </div>
        </div>
      </div>

    </div>
  )
}