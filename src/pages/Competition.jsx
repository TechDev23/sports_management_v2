import React from "react";
import Event from "../components/OnGoing/Event";
import { Typography } from "@material-tailwind/react";

const Competition = () => {
  return (
    <div>
      <div className="font-bold text-3xl p-2 flex items-center">
        <h1>Ongoing Competition</h1>
      </div>
      <div
        className="justify-center xl:col-span-2 items-center content-center grid grid-cols-2 "
      >
        <div className="p-2 hover:border-blue-600">
          <Event className="hover:border-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default Competition;
