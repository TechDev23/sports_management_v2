
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { approveTeam, getTeamsByID } from "../redux/slices/Teams/teamActions";
import { creatGame } from "../redux/slices/Admin/adminActions";

import badminton from '../assets/images/badminton.jpg';

import { useNavigate } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

const Dashboard = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await dispatch(getTeamsByID({ id: 1 }));
        console.log('Data:', response.payload); // Access the data from the response
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  },[dispatch])

  const handleApproveTeam = async (game) => {
    try {
      const response = await dispatch(creatGame(game))
      console.log("Create team: ", response.payload)
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className='font-bold text-3xl  p-4'>
    

    <div className="border-b-2 w-full"><p className="bg-gray-100 p-2 px-4 w-fit rounded-xl mt-2 mb-2 text-blue-gray-900">Tournaments</p></div>

    <Card className="mt-10 w-80 shadow-lg">
    <CardHeader color="blue-gray" className="relative h-46">
      <img src={badminton} alt="img-blur-shadow" layout="fill" />
    </CardHeader>
    <CardBody>
    <div className="flex flex-row justify-between">
    <Typography variant="h5" color="blue-gray" className="mb-2">
    Badminton
  </Typography>
    <Typography variant="h6" color="green" className="mb-2 bg-green-50 py-1 px-3  rounded-xl w-fit">
    Active
  </Typography>
    </div>
    <Typography>
        event started at <span>{}</span>

      </Typography>
    
      <Typography>
        the great game to play
      </Typography>
    </CardBody>
    <CardFooter className="pt-0">
    <div className="flex justify-center items-center">
    
    <Button onClick={() => navigate('/organizer/tournament')} className="bg-orange-500 hover:bg-orange-700 hover:drop-shadow- hover:drop-shadow-none font-bold text-white items-center">View Matches</Button>
    </div>
    </CardFooter>
  </Card>


    </div>
  )
}

export default Dashboard