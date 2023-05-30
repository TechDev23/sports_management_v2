// import { Input, Select, Option, ButtonGroup, Button, Textarea } from "@material-tailwind/react";
import { useState } from 'react';
import Rosters from './rosters';
import Details from '../../components/details';

import {Participants} from '../index';

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import SetOperations from '../SetOperations';

export default function Example() {
  const data = [
    {
      label: "GAME DETAILS",
      value: "details",
      desc: <Details />,
    },
    {
      label: "PARTICIPANTS",
      value: "participants",
      desc: <Participants />,
    },
    {
      label: "SET OPERATIONS",
      value: "operations",
      desc: <SetOperations />,
    },
    {
      label: "ROSTERS",
      value: "rosters",
      desc: <Rosters />,
    },
    {
      label: "CERTIFICATIONS",
      value: "certifications",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];


  return (
    <div className="px-2 border">
      <h2 className="font-bold text-3xl">Active Tournament2</h2>


      <div className=" my-5 min-w-screen min-h-screen flex flex-row justify-start">

        <Tabs value="details" className="w-10/12">
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
          <TabsBody className=''>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                <div className="w-full">
                {desc}
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>



    </div>

  );
}