/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
// import { fetchAllPlayers } from "../redux/slices/Participants/participantsActions";

import { Card, Typography, CardFooter, CardBody, CardHeader, Button } from "@material-tailwind/react";

import badminton from '../../assets/images/badminton.jpg';

import { useNavigate } from "react-router-dom";

// import { fetchTournaments, getTournamentEntries } from "../redux/slices/Tournament/tournamentAction";

import { fetchTournaments } from "../../redux/slices/Tournament/tournamentAction";


const Discover = () => {

  const navigate = useNavigate();

  const [allTours, setAllTours] = useState([])
  const dispatch = useDispatch();


  const tourID = localStorage.getItem("createdTournamentID")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(fetchTournaments({isActive: true}));
        setAllTours(response.payload)
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, [dispatch]);
  console.log("all tours",allTours)


  return (
    <div className='min-h-screen min-w-screen'>
        <div className="bg-white w-full h-16 flex items-center drop-shadow-xl rounded-lg rounded-t-none rounded-s sticky">
            <Navbar />
        </div>
        <div className="bg-white w-full h-screen drop-shadow-2xl rounded-md">
        <div className='  p-4'>

        <div className="border-b-2 w-full"><p className="bg-gray-100 p-2 px-4 w-fit rounded-xl mt-2 mb-2 text-blue-gray-900 font-bold text-3xl">Tournaments</p></div>
    
        <div className="flex flex-row  gap-5">
    
        {
        allTours.map((tour, index) => (
          <>
    
          <Card className="mt-10 w-96 shadow-lg">
          <CardHeader color="blue-gray" className="relative h-46">
            <img src={badminton} alt="img-blur-shadow" layout="fill" />
          </CardHeader>
          <CardBody className="space-y-3">
          <div className="flex flex-row justify-between">
            <Typography variant="h5" color="blue-gray" className="mb-2 bg-gray-100 rounded-2xl p-1 px-2">
              {tour.name}
            </Typography>
            { tour.isActive ?
              (<Typography variant="h5" color="green" className="mb-2 bg-green-50 py-1 px-2  rounded-2xl w-fit">Active</Typography>) 
              :
            (<Typography variant="h5" color="red" className="mb-2 bg-red-50 py-1 px-3  rounded-2xl w-fit">Ended</Typography>)
            
            }
              </div>
      
            <div className="text-sm flex flex-row justify-between font-normal items-center">
              <Typography>{tour.start_date.split('T')[0]}
              </Typography>
              <p className="font-bold text-blue-gray-900">---- to ----</p>
              <Typography>
                {tour.end_date.split('T')[0]}
              </Typography>
          
            </div>
      
            <div className="flex flex-col border-y py-1">
            <div className="flex justify-between items-center">
              <p className="text-sm font-bold text-blue-gray-900 px-1 rounded-2xl bg-gray-100 w-fit">details</p>
              <p className="text-sm font-bold px-1 rounded-2xl  w-fit text-blue-gray-900 bg-gray-100">Max team size : {tour.team_size}</p>
            
            </div>
              <Typography>
                {tour.description}
              </Typography>
              
      
            </div>
          </CardBody>
          <CardFooter className="pt-0">
          <div className="flex justify-start items-center">
          
          <Button onClick={() => navigate('/participant/details')} className="bg-orange-500 hover:bg-orange-700 hover:drop-shadow- hover:drop-shadow-none font-bold text-white items-center">View Details</Button>
          </div>
          </CardFooter>
        </Card>
    
          </>
        ))
      }
    
      </div>
    
       
        </div>
          </div>
    </div>

  )
}

export default Discover