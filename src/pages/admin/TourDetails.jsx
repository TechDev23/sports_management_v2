/* eslint-disable no-unused-vars */
import React from 'react';
import {useState} from 'react';
import { GiCricketBat } from 'react-icons/gi';
import { MdSportsTennis } from 'react-icons/md'

import {useNavigate} from "react-router-dom";

import Description from './description';

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
//import SetOperations from '../SetOperations';

const TourDetails = () => {

  const navigate = useNavigate();

  const data = [
    {
      label: "OVERVIEW",
      value: "overview",
      desc: <Description />,
    },
    {
      label: "PRIZES",
      value: "prizes",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "JUDGES",
      value: "judges",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "SCHEDULE",
      value: "schedule",
      desc:`We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    
  ];
  
  const [activeTab, setActiveTab] = useState("details");

  const handleTabChange = (tabValue) => {
    setActiveTab(tabValue);
  };

  return (
    <div>
{/** 

    <header className="text-gray-600 body-font">
        <div className=" flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl">SportsX</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 text-orange-400 hover:text-orange-500">Notifications</a>
                <a className="mr-5 text-orange-400 hover:text-orange-500">Settings</a>
                <a className="mr-5 text-orange-400 hover:text-orange-500">Help</a>
            </nav>
            <div className='flex flex-row justify-center items-center gap-4'>
                <p className=' text-orange-400 "'>User</p>
                <img className="w-12 h-12 rounded-3xl bg-yellow-900" src="https://i.pinimg.com/originals/df/5f/5b/df5f5b1b174a2b4b6026cc6c8f9395c1.jpg" alt="profile" />
            </div>
        </div>
    </header>
*/}


   <div className='rounded border border-gray-600 m-4'>
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-5xl text-2xl font-bold title-font mb-4 mt-8 text-black"><MdSportsTennis className="inline-block mr-2 text-5xl" /> Badminton</h1>
    </div> 
    
    <div className=" my-5 min-w-screen min-h-full flex flex-row justify-center pl-32 pr-32">

        <Tabs value={activeTab} className="w-full">
          <TabsHeader
            className="min-w-full w-11/12 text-sm flex flex-row items-center justify-center divide-orange-600  bg-orange-600 p-1 rounded-md space-x-2 text-white hover:text-orange-600 focus:text-orange-400"
            indicatorProps={{
              className: "hover:shadow-none rounded-md bg-orange-600 hover:bg-white hover:text-orange-600 focus:bg-white focus:text-orange-400",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} className="text-white" >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className='flex-grow'>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value} className="w-full">
                <div className="w-full ml-auto">
                {desc}
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
      </div>

</div>

    
    
    // <div className='min-h-screen min-w-screen'>
    //     <div className="bg-white w-full h-16 flex items-center drop-shadow-xl rounded-lg rounded-t-none rounded-s fixed">
    //         <Navbar />
    //     </div>
    //     <div className=" flex items-center justify-center min-w-screen min-h-screen">
    //         <h1 className='font-bold text-3xl '>Discover Page</h1>
    //     </div>
    //     <div className="bg-white w-full drop-shadow-2xl rounded-md">
    //         <Outlet />
    //       </div>
    // </div>

  )
}

export default TourDetails