import React from 'react';
import Event from '../components/OnGoing/Event';
import { Typography } from '@material-tailwind/react';


const Competition = () => {
  return (
    <div>
        <div className='font-bold text-3xl p-2 flex flex-row'><h1>Ongoing Competition</h1></div>
        <div className='justify-center items-center content-center grid grid-cols-2 msm:grid-cols-2
        mmd:grid-cols-2 mlg:grid-cols-3 mxl:grid-cols-4 m2xl:grid-cols-4
        mt-8 h-full space-x-5 mx-5'>
        <div className='p-2 hover:border-blue-600'>
            <Event className="hover:border-blue-600"/>
        </div>

        <div className='p-2 hover:border-blue-600'>
            <Event className="hover:border-blue-600"/>
        </div>

        </div>
    </div>
  )
}

export default Competition;