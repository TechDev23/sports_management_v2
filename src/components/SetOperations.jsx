import { useState } from 'react';
// import { CalendarComponent } from './'
import { Select, Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

export default function SetOperations() {

    return (
        <div className='flex flex-col space-y-4 content-center'>

            <div className='border-2  rounded-lg p-2  w-36 '>

                <label for="start"></label>
                <input type="date" id="start" label="start" className='outline-none'></input>

            </div>

            <div className='border-2 rounded-lg p-2 w-fit'>

                <label for="timeSlots"></label>
                <input type="time" id="time" label="Select Timeslots" className='outline-none'></input>

            </div>

            <div className='border-2 rounded-lg  p-2 w-fit'>

                <label for=""></label>
                <input type="text" id="groundDetails" placeholder="Enter Ground Details" className='outline-none'></input>

            </div>



            <div className='p-3  flex flex-row space-x-14 items-center'>

                <div className='text-xl text-midblack font-bold'>

                    <h2>Add Responsibles </h2>

                </div>

                <div className='border-2 rounded-lg  p-1.5 w-52'>

                    <label for=""></label>
                    <input type="text" id="nameEmail" placeholder="Enter name or email" className='outline-none'></input>

                </div>

                <div className="w-fit rounded-lg">
                    <Select label="Roles">
                        <Option>Striker</Option>
                        <Option>Goal-Keeper</Option>
                        <Option>Midfilder</Option>
                        <Option>Defender</Option>
                    </Select>
                </div>
            </div>

            <div className='flex flex-row rounded-lg justify-center content-center items-center'>
             <Button color='orange'>Save</Button>
            </div>

        </div>
    )
}